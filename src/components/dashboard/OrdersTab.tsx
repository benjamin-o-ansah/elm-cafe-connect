import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Clock, CheckCircle, XCircle, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrdersTab = () => {
  const navigate = useNavigate();

  // Mock data - replace with actual data when backend is connected
  const orders = [
    {
      id: "ORD-001",
      date: "2024-11-15",
      items: ["Classic Breakfast", "Latte", "Avocado Toast"],
      total: 350,
      status: "delivered",
    },
    {
      id: "ORD-002",
      date: "2024-11-10",
      items: ["Jollof Rice", "Grilled Chicken", "Smoothie"],
      total: 520,
      status: "in-transit",
    },
    {
      id: "ORD-003",
      date: "2024-11-05",
      items: ["Chicken & Waffles", "Fresh Juice"],
      total: 280,
      status: "cancelled",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "in-transit":
        return <Clock className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" => {
    switch (status) {
      case "delivered":
        return "default";
      case "in-transit":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Order History
          </CardTitle>
        </CardHeader>
        <CardContent>
          {orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg">{order.id}</span>
                        <Badge variant={getStatusVariant(order.status)} className="flex items-center gap-1">
                          {getStatusIcon(order.status)}
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                      <p className="text-sm">{order.items.join(", ")}</p>
                      <p className="font-semibold">GHS {order.total}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/order-tracking/${order.id}`)}
                      className="w-full sm:w-auto"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No orders yet</p>
              <Button className="mt-4" onClick={() => navigate("/menu")}>
                Start Ordering
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersTab;
