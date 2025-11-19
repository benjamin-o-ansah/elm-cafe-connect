import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const AnalyticsDashboard = () => {
  // Mock data
  const weeklyStats = [
    { day: "Mon", revenue: 2400, orders: 12 },
    { day: "Tue", revenue: 3200, orders: 18 },
    { day: "Wed", revenue: 2800, orders: 15 },
    { day: "Thu", revenue: 3600, orders: 21 },
    { day: "Fri", revenue: 4200, orders: 25 },
    { day: "Sat", revenue: 5100, orders: 32 },
    { day: "Sun", revenue: 4800, orders: 28 },
  ];

  const topItems = [
    { name: "Classic Breakfast", orders: 145, revenue: 20300 },
    { name: "Jollof Rice", orders: 132, revenue: 23760 },
    { name: "Avocado Toast", orders: 98, revenue: 9310 },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">This Week</p>
                <p className="text-xl sm:text-2xl font-bold">GHS 26,100</p>
              </div>
              <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Total Orders</p>
                <p className="text-xl sm:text-2xl font-bold">151</p>
              </div>
              <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">New Customers</p>
                <p className="text-xl sm:text-2xl font-bold">23</p>
              </div>
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Growth</p>
                <p className="text-xl sm:text-2xl font-bold">+18%</p>
              </div>
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Weekly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyStats.map((stat) => (
              <div key={stat.day} className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-medium">{stat.day}</span>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-muted-foreground">{stat.orders} orders</span>
                    <span className="font-semibold">GHS {stat.revenue}</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(stat.revenue / 5500) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Selling Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Top Selling Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topItems.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-3 sm:p-4 border rounded-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary text-sm sm:text-base">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.orders} orders</p>
                  </div>
                </div>
                <span className="font-bold text-sm sm:text-base">GHS {item.revenue}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
