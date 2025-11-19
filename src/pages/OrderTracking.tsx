import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Clock, Package, Bike, MapPin } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const OrderTracking = () => {
  const { orderId } = useParams();
  
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
    distance: '3.2 km',
    customerAddress: '123 Airport Road, Accra',
    restaurantAddress: 'Elm Cafe, Lennox Mall, Accra',
    riderName: 'Kwame Mensah',
    riderPhone: '+233 24 123 4567',
  });

  const statusSteps = [
    { key: 'confirmed', label: 'Order Confirmed', icon: CheckCircle2, completed: true },
    { key: 'preparing', label: 'Preparing Food', icon: Package, completed: true },
    { key: 'in-transit', label: 'Out for Delivery', icon: Bike, completed: true },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle2, completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Track Your Order</h1>
            <p className="text-muted-foreground">Order ID: {order.id}</p>
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
                  <Alert className="mb-4">
                    <Clock className="h-4 w-4" />
                    <AlertTitle>Estimated Arrival</AlertTitle>
                    <AlertDescription>
                      Your order will arrive in approximately {order.estimatedTime}
                    </AlertDescription>
                  </Alert>

                  <div className="bg-muted rounded-lg p-8 text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">Map Integration Coming Soon</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      You'll be able to track your rider's location in real-time
                    </p>
                    <div className="space-y-2 text-left max-w-md mx-auto">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Distance:</span>
                        <span className="font-medium">{order.distance}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Estimated Time:</span>
                        <span className="font-medium">{order.estimatedTime}</span>
                      </div>
                    </div>
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
