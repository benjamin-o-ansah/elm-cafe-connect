import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, User, CreditCard, TrendingUp, Heart, MapPin } from "lucide-react";
import OrdersTab from "@/components/dashboard/OrdersTab";
import ProfileTab from "@/components/dashboard/ProfileTab";
import PaymentsTab from "@/components/dashboard/PaymentsTab";
import ExpenditureTab from "@/components/dashboard/ExpenditureTab";
import FavoritesTab from "@/components/dashboard/FavoritesTab";
import LocationTab from "@/components/dashboard/LocationTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-foreground">My Dashboard</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Manage your account and track your orders</p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2 h-auto p-1 sm:p-2 bg-muted/50 w-full overflow-x-auto">
              <TabsTrigger value="orders" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                <Package className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Orders</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                <User className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Profile</span>
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                <CreditCard className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Payments</span>
                <span className="xs:hidden">Pay</span>
              </TabsTrigger>
              <TabsTrigger value="expenditure" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Spending</span>
                <span className="xs:hidden">$$</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Favorites</span>
                <span className="xs:hidden">♥</span>
              </TabsTrigger>
              <TabsTrigger value="location" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Location</span>
                <span className="xs:hidden">Pin</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <OrdersTab />
            </TabsContent>

            <TabsContent value="profile">
              <ProfileTab />
            </TabsContent>

            <TabsContent value="payments">
              <PaymentsTab />
            </TabsContent>

            <TabsContent value="expenditure">
              <ExpenditureTab />
            </TabsContent>

            <TabsContent value="favorites">
              <FavoritesTab />
            </TabsContent>

            <TabsContent value="location">
              <LocationTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
