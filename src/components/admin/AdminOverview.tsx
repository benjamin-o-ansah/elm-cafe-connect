import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingBag, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";

const AdminOverview = () => {
  // Mock data - replace with actual data from backend
  const stats = {
    todayRevenue: 8450,
    todayOrders: 45,
    activeUsers: 1234,
    growthRate: 12.5,
  };

  const recentOrders = [
    { id: "ORD-105", customer: "John Doe", amount: 350, status: "preparing", time: "5 min ago" },
    { id: "ORD-104", customer: "Jane Smith", amount: 520, status: "ready", time: "12 min ago" },
    { id: "ORD-103", customer: "Mike Johnson", amount: 280, status: "delivered", time: "25 min ago" },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Today's Revenue</p>
                <p className="text-xl sm:text-2xl font-bold">GHS {stats.todayRevenue}</p>
              </div>
              <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Today's Orders</p>
                <p className="text-xl sm:text-2xl font-bold">{stats.todayOrders}</p>
              </div>
              <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Active Users</p>
                <p className="text-xl sm:text-2xl font-bold">{stats.activeUsers}</p>
              </div>
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Growth Rate</p>
                <p className="text-xl sm:text-2xl font-bold">+{stats.growthRate}%</p>
              </div>
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-accent/50 transition-colors gap-2 sm:gap-0"
              >
                <div className="flex items-center gap-3">
                  {order.status === "preparing" && <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />}
                  {order.status === "ready" && <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />}
                  {order.status === "delivered" && <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />}
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{order.id}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:gap-4 ml-7 sm:ml-0">
                  <span className="font-semibold text-sm sm:text-base">GHS {order.amount}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">{order.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOverview;
