import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Package, Bike, MapPin, Timer } from 'lucide-react';
import { AlertDescription, AlertTitle } from '@/components/ui/alert';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import elegantBg from "@/assets/bg-img.png";

// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoicmljaGFyZGt1bWxhbyIsImEiOiJjbWk2ZGppdGwxYTcyMmpzMGZ5ejJhNm5tIn0.ZDgKdjHMQ8RIH1myDsy3hg';

const OrderTracking = () => {
  const { orderId } = useParams();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const riderMarker = useRef<mapboxgl.Marker | null>(null);
  
  // Restaurant coordinates (Lennox Mall, Accra)
  const restaurantCoords: [number, number] = [-0.1870, 5.6037];
  
  // Mock order data - will be replaced with real data from backend
  const [order] = useState({
    id: orderId || 'ORD-12345',
    status: 'in-transit',
    items: [
      { name: 'Grilled Chicken', quantity: 2, price: 160 },
      { name: 'Classic Burger', quantity: 1, price: 170 },
    ],
    subtotal: 490,
    deliveryFee: 20,
    total: 510,
    estimatedTime: '25-30 minutes',
    customerAddress: '123 Airport Road, Accra',
    restaurantAddress: 'Elm Cafe, Lennox Mall, Accra',
    riderName: 'Kwame Mensah',
    riderPhone: '+233 24 123 4567',
  });

  const [deliveryLocation, setDeliveryLocation] = useState<[number, number]>([-0.1970, 5.6137]);
  const [riderLocation, setRiderLocation] = useState<[number, number]>([-0.1920, 5.6087]);
  const [distance, setDistance] = useState<number>(3.2);

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (coord1: [number, number], coord2: [number, number]): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (coord2[1] - coord1[1]) * Math.PI / 180;
    const dLon = (coord2[0] - coord1[0]) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coord1[1] * Math.PI / 180) * Math.cos(coord2[1] * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: restaurantCoords,
      zoom: 13,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add restaurant marker
    new mapboxgl.Marker({ color: '#ea384c' })
      .setLngLat(restaurantCoords)
      .setPopup(new mapboxgl.Popup().setHTML('<strong>Elm Cafe</strong><br>Pickup Location'))
      .addTo(map.current);

    // Add delivery location marker
    const deliveryMarkerEl = document.createElement('div');
    deliveryMarkerEl.className = 'delivery-marker';
    deliveryMarkerEl.style.backgroundColor = '#22c55e';
    deliveryMarkerEl.style.width = '30px';
    deliveryMarkerEl.style.height = '30px';
    deliveryMarkerEl.style.borderRadius = '50%';
    deliveryMarkerEl.style.border = '3px solid white';
    deliveryMarkerEl.style.cursor = 'pointer';

    const deliveryMarker = new mapboxgl.Marker({ element: deliveryMarkerEl, draggable: true })
      .setLngLat(deliveryLocation)
      .setPopup(new mapboxgl.Popup().setHTML('<strong>Delivery Location</strong><br>Drag to adjust'))
      .addTo(map.current);

    // Update delivery location when marker is dragged
    deliveryMarker.on('dragend', () => {
      const lngLat = deliveryMarker.getLngLat();
      const newLocation: [number, number] = [lngLat.lng, lngLat.lat];
      setDeliveryLocation(newLocation);
      setDistance(calculateDistance(riderLocation, newLocation));
    });

    // Add rider marker
    const riderMarkerEl = document.createElement('div');
    riderMarkerEl.className = 'rider-marker';
    riderMarkerEl.style.backgroundColor = '#3b82f6';
    riderMarkerEl.style.width = '30px';
    riderMarkerEl.style.height = '30px';
    riderMarkerEl.style.borderRadius = '50%';
    riderMarkerEl.style.border = '3px solid white';
    riderMarkerEl.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:white;font-weight:bold;">🏍️</div>';

    riderMarker.current = new mapboxgl.Marker({ element: riderMarkerEl })
      .setLngLat(riderLocation)
      .setPopup(new mapboxgl.Popup().setHTML('<strong>Rider Location</strong>'))
      .addTo(map.current);

    // Allow clicking on map to set delivery location
    map.current.on('click', (e) => {
      const newLocation: [number, number] = [e.lngLat.lng, e.lngLat.lat];
      setDeliveryLocation(newLocation);
      deliveryMarker.setLngLat(newLocation);
      setDistance(calculateDistance(riderLocation, newLocation));
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  // Update route and distance when locations change
  useEffect(() => {
    if (!map.current) return;

    const dist = calculateDistance(riderLocation, deliveryLocation);
    setDistance(dist);

    // Add route layer
    map.current.on('load', () => {
      if (!map.current) return;

      // Add route source if it doesn't exist
      if (!map.current.getSource('route')) {
        map.current.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [riderLocation, deliveryLocation],
            },
          },
        });

        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#3b82f6',
            'line-width': 4,
            'line-opacity': 0.75,
          },
        });
      }
    });

    // Fit bounds to show all markers
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend(restaurantCoords);
    bounds.extend(riderLocation);
    bounds.extend(deliveryLocation);
    map.current.fitBounds(bounds, { padding: 50 });
  }, [riderLocation, deliveryLocation]);

  // Simulate rider movement (for demo purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      setRiderLocation((prev) => {
        const newLat = prev[1] + (Math.random() - 0.5) * 0.001;
        const newLng = prev[0] + (Math.random() - 0.5) * 0.001;
        const newLocation: [number, number] = [newLng, newLat];
        
        if (riderMarker.current) {
          riderMarker.current.setLngLat(newLocation);
        }
        
        return newLocation;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statusSteps = [
    { key: 'confirmed', label: 'Order Confirmed', icon: CheckCircle2, completed: true },
    { key: 'preparing', label: 'Preparing Food', icon: Package, completed: true },
    { key: 'in-transit', label: 'Out for Delivery', icon: Bike, completed: true },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle2, completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
       <div
                      className="fixed inset-0 opacity-5 pointer-events-none"
                      style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}
                    />
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-muted">Track Your Order</h1>
            <p className="text-muted">Order ID: {order.id}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {/* Order Status */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Order Status</CardTitle>
                    <Badge className="bg-primary">
                      {order.status.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {statusSteps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.key} className="flex items-start gap-4">
                          <div className={`p-2 rounded-full ${
                            step.completed ? 'bg-primary text-primary-foreground' : 'bg-muted'
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {step.label}
                            </p>
                            {step.completed && index < statusSteps.length - 1 && (
                              <div className="mt-2 h-12 w-0.5 bg-primary ml-5" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Live Tracking Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Live Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                 
                  {/* <Alert className="group mb-4">
  <Timer 
    className="h-4 w-4 text-muted group-hover:text-muted"
  />
  <AlertTitle className="text-muted">Estimated Arrival</AlertTitle>
  <AlertDescription className="text-muted">
    Your order will arrive in approximately {order.estimatedTime}
  </AlertDescription>
</Alert> */}

<div 
className="bg-background border border-border rounded-md p-4 mb-4"
style={{

  display: 'flex',flexDirection:'column',justifyContent:'start',
 
}}>
  <div style={{
    display:'flex',
    gap:'10px',
  }}>
<Timer 
    className="h-4 w-4 text-muted group-hover:text-muted"
  />
  <AlertTitle className="text-muted ">Estimated Arrival</AlertTitle>
  </div>
 
  <AlertDescription className="text-muted" style={{
    marginLeft:'25px'
  }}>
    Your order will arrive in approximately {order.estimatedTime}
  </AlertDescription>
</div>

                  <div ref={mapContainer} className="h-[400px] rounded-lg mb-4" />

                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Distance to delivery:</span>
                      <span className="font-medium">{distance.toFixed(2)} km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estimated Time:</span>
                      <span className="font-medium">{order.estimatedTime}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      💡 Click or drag the green marker to adjust your delivery location
                    </p>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        A
                      </div>
                      <div>
                        <p className="text-sm font-medium">Pickup Location</p>
                        <p className="text-sm text-muted-foreground">{order.restaurantAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-semibold text-sm">
                        B
                      </div>
                      <div>
                        <p className="text-sm font-medium">Delivery Location</p>
                        <p className="text-sm text-muted-foreground">{order.customerAddress}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rider Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Rider</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {order.riderName.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{order.riderName}</p>
                      <p className="text-sm text-muted-foreground">{order.riderPhone}</p>
                    </div>
                    <Badge variant="outline">On the way</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} x{item.quantity}
                        </span>
                        <span>GHS {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>GHS {order.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span>GHS {order.deliveryFee.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>GHS {order.total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTracking;
