import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, CheckCircle, XCircle, Package, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OrderManagement = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState("all");

  // Mock data
  const orders = [
    {
      id: "ORD-105",
      customer: "John Doe",
      items: ["Classic Breakfast", "Latte"],
      total: 350,
      status: "pending",
      time: "5 min ago",
      phone: "+233 24 123 4567",
    },
    {
      id: "ORD-104",
      customer: "Jane Smith",
      items: ["Jollof Rice", "Smoothie"],
      total: 520,
      status: "preparing",
      time: "12 min ago",
      phone: "+233 24 987 6543",
    },
    {
      id: "ORD-103",
      customer: "Mike Johnson",
      items: ["Avocado Toast"],
      total: 280,
      status: "ready",
      time: "25 min ago",
      phone: "+233 24 555 1234",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "preparing":
        return <Package className="h-4 w-4" />;
      case "ready":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" => {
    switch (status) {
      case "ready":
        return "default";
      case "cancelled":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Order ${orderId} status changed to ${newStatus}`,
    });
  };

  const filteredOrders = filter === "all" 
    ? orders 
    : orders.filter(order => order.status === filter);

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle className="text-lg sm:text-xl">Order Management</CardTitle>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter orders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="preparing">Preparing</SelectItem>
                <SelectItem value="ready">Ready</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="p-3 sm:p-4 border rounded-lg hover:bg-accent/50 transition-colors space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-base sm:text-lg">{order.id}</span>
                      <Badge variant={getStatusVariant(order.status)} className="flex items-center gap-1">
                        {getStatusIcon(order.status)}
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground font-medium">{order.customer}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{order.phone}</p>
                    <p className="text-xs sm:text-sm">{order.items.join(", ")}</p>
                    <p className="font-semibold text-sm sm:text-base">GHS {order.total}</p>
                    <p className="text-xs text-muted-foreground">{order.time}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <Select
                      defaultValue={order.status}
                      onValueChange={(value) => handleStatusChange(order.id, value)}
                    >
                      <SelectTrigger className="w-full sm:w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="preparing">Preparing</SelectItem>
                        <SelectItem value="ready">Ready</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderManagement;
