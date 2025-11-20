import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus, Trash2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PaymentsTab = () => {
  const { toast } = useToast();

  // Mock data - replace with actual data when backend is connected
  const paymentMethods = [
    {
      id: "1",
      type: "card",
      last4: "4242",
      brand: "Visa",
      expiryMonth: "12",
      expiryYear: "2025",
      isDefault: true,
    },
    {
      id: "2",
      type: "mobile",
      provider: "MTN Mobile Money",
      number: "024 123 4567",
      isDefault: false,
    },
  ];

  const handleDelete = (id: string) => {
    // TODO: Delete payment method from backend
    toast({
      title: "Payment Method Removed",
      description: "The payment method has been removed successfully.",
    });
  };

  const handleSetDefault = (id: string) => {
    // TODO: Set as default in backend
    toast({
      title: "Default Payment Updated",
      description: "Your default payment method has been updated.",
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Methods
          </CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </CardHeader>
        <CardContent>
          {paymentMethods.length > 0 ? (
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                        {method.type === "card" ? (
                          <span className="font-semibold">
                            {method.brand} •••• {method.last4}
                          </span>
                        ) : (
                          <span className="font-semibold">{method.provider}</span>
                        )}
                        {method.isDefault && (
                          <Badge variant="default" className="flex items-center gap-1">
                            <Check className="h-3 w-3" />
                            Default
                          </Badge>
                        )}
                      </div>
                      {method.type === "card" ? (
                        <p className="text-sm text-muted-foreground">
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground">{method.number}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {!method.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSetDefault(method.id)}
                        >
                          Set Default
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(method.id)}
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
              <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No payment methods added</p>
              <Button className="mt-4">
                <Plus className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Supported Payment Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Credit/Debit Cards</p>
              <p className="text-sm text-muted-foreground">Visa, Mastercard</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Mobile Money</p>
              <p className="text-sm text-muted-foreground">MTN, Vodafone, AirtelTigo</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Cash on Delivery</p>
              <p className="text-sm text-muted-foreground">Pay when you receive</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentsTab;
