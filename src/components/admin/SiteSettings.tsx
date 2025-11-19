import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const SiteSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="Elm CafeGh" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tagline">Tagline</Label>
            <Input id="tagline" defaultValue="Redefining dining experiences" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              defaultValue="A distinctive restaurant-cafe in Accra focused on quality, sustainability, and local ingredients."
              rows={3}
            />
          </div>
          <Button onClick={handleSave} className="w-full sm:w-auto">Save Changes</Button>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+233 24 123 4567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="info@elmcafe.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              defaultValue="Lennox Mall, Accra & Embassy Gardens"
              rows={2}
            />
          </div>
          <Button onClick={handleSave} className="w-full sm:w-auto">Save Changes</Button>
        </CardContent>
      </Card>

      {/* Feature Toggles */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Feature Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2">
            <div>
              <p className="font-medium text-sm sm:text-base">Online Ordering</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Enable/disable online ordering</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2">
            <div>
              <p className="font-medium text-sm sm:text-base">Reservations</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Allow table reservations</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2">
            <div>
              <p className="font-medium text-sm sm:text-base">Gift Cards</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Enable gift card sales</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2">
            <div>
              <p className="font-medium text-sm sm:text-base">Loyalty Program</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Activate loyalty rewards</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Button onClick={handleSave} className="w-full sm:w-auto">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteSettings;
