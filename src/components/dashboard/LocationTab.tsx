import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Plus, Trash2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const LocationTab = () => {
  const { toast } = useToast();
  const [showAddForm, setShowAddForm] = useState(false);

  // Mock data - replace with actual data when backend is connected
  const [addresses, setAddresses] = useState([
    {
      id: "1",
      label: "Home",
      address: "123 Cantonments Road, Accra",
      phone: "+233 24 123 4567",
      isDefault: true,
    },
    {
      id: "2",
      label: "Office",
      address: "45 Independence Avenue, Accra",
      phone: "+233 24 987 6543",
      isDefault: false,
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    label: "",
    address: "",
    phone: "",
  });

  const handleAddAddress = () => {
    if (!newAddress.label || !newAddress.address || !newAddress.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // TODO: Save to backend
    setAddresses([
      ...addresses,
      {
        id: String(addresses.length + 1),
        ...newAddress,
        isDefault: addresses.length === 0,
      },
    ]);

    setNewAddress({ label: "", address: "", phone: "" });
    setShowAddForm(false);

    toast({
      title: "Address Added",
      description: "Your delivery address has been added successfully.",
    });
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    toast({
      title: "Address Removed",
      description: "The delivery address has been removed.",
    });
  };

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
    toast({
      title: "Default Address Updated",
      description: "Your default delivery address has been updated.",
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Saved Addresses
          </CardTitle>
          <Button size="sm" onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Address
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Add Address Form */}
          {showAddForm && (
            <Card className="border-primary">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="label">Address Label</Label>
                  <Input
                    id="label"
                    placeholder="e.g., Home, Office, etc."
                    value={newAddress.label}
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, label: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Input
                    id="address"
                    placeholder="Street, area, city"
                    value={newAddress.address}
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, address: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+233 24 123 4567"
                    value={newAddress.phone}
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, phone: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleAddAddress} className="flex-1">
                    Save Address
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Saved Addresses */}
          {addresses.length > 0 ? (
            <div className="space-y-3">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-semibold">{addr.label}</span>
                        {addr.isDefault && (
                          <Badge variant="default" className="flex items-center gap-1">
                            <Check className="h-3 w-3" />
                            Default
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-foreground">{addr.address}</p>
                      <p className="text-sm text-muted-foreground">{addr.phone}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      {!addr.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSetDefault(addr.id)}
                        >
                          Set Default
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(addr.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No saved addresses</p>
              <Button className="mt-4" onClick={() => setShowAddForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Address
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Map Integration Info */}
      <Card>
        <CardHeader>
          <CardTitle>Location Features</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Save multiple delivery addresses for quick checkout. Set your default
            location to streamline your ordering experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <MapPin className="h-5 w-5 text-primary mb-2" />
              <p className="font-semibold text-sm">GPS Tracking</p>
              <p className="text-xs text-muted-foreground">
                Track your order in real-time
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <MapPin className="h-5 w-5 text-primary mb-2" />
              <p className="font-semibold text-sm">Multiple Addresses</p>
              <p className="text-xs text-muted-foreground">
                Save home, office, and more
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationTab;
