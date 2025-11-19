import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, UserX, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const UserManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const users = [
    { id: "1", name: "John Doe", email: "john@example.com", orders: 15, spent: 2450, status: "active", role: "customer" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", orders: 8, spent: 1200, status: "active", role: "customer" },
    { id: "3", name: "Admin User", email: "admin@elmcafe.com", orders: 0, spent: 0, status: "active", role: "admin" },
  ];

  const handleBlockUser = (userId: string) => {
    toast({
      title: "User Blocked",
      description: "User has been blocked successfully.",
      variant: "destructive",
    });
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">User Management</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Users List */}
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="p-3 sm:p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-sm sm:text-base">{user.name}</h3>
                      <Badge variant={user.role === "admin" ? "default" : "secondary"} className="flex items-center gap-1 text-xs">
                        {user.role === "admin" && <Shield className="h-3 w-3" />}
                        {user.role}
                      </Badge>
                      <Badge variant={user.status === "active" ? "default" : "destructive"} className="text-xs">
                        {user.status}
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{user.email}</p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                      <span><strong>{user.orders}</strong> orders</span>
                      <span><strong>GHS {user.spent}</strong> spent</span>
                    </div>
                  </div>
                  
                  {user.role !== "admin" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleBlockUser(user.id)}
                      className="w-full sm:w-auto"
                    >
                      <UserX className="h-4 w-4 mr-2 text-destructive" />
                      Block User
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;
