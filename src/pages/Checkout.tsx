import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Store, CreditCard, Wallet, Banknote } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "mobile-money" | "cash">("stripe");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deliveryFee = orderType === "delivery" ? 20 : 0;
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if user is logged in (placeholder - will be replaced with actual auth)
    const isLoggedIn = false; // This will be replaced with actual auth check

    if (!isLoggedIn) {
      toast({
        title: "Sign in required",
        description: "Please sign in to complete your order",
      });
      navigate("/signin?redirect=/checkout");
      return;
    }

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "You will receive a confirmation shortly",
      });
      clearCart();
      navigate("/order-tracking/mock-order-id");
      setIsSubmitting(false);
    }, 1500);
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" onClick={() => navigate("/cart")} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </Button>

          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                {/* Order Type */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={orderType} onValueChange={(value: any) => setOrderType(value)}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-accent">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <Label htmlFor="delivery" className="flex items-center cursor-pointer flex-1">
                          <MapPin className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">Delivery</p>
                            <p className="text-sm text-muted-foreground">Delivered to your location (GHS 20.00)</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-accent">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex items-center cursor-pointer flex-1">
                          <Store className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">In-Store Pickup</p>
                            <p className="text-sm text-muted-foreground">Collect from restaurant (Free)</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Delivery Details */}
                {orderType === "delivery" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Address</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          placeholder="Enter your delivery address"
                          className="placeholder:text-primary-foreground text-primary-foreground"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="Accra" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+233..."
                            required
                            className="placeholder:text-primary-foreground text-primary-foreground"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
                        <Textarea
                          className="placeholder:text-primary-foreground text-primary-foreground"
                          id="instructions"
                          placeholder="Add any special instructions for delivery..."
                          rows={3}
                        />
                      </div>
                      <Button type="button" variant="outline" className="w-full">
                        <MapPin className="mr-2 h-4 w-4" />
                        Select Location on Map
                      </Button>
                      <p className="text-sm text-muted-foreground">Map integration will be available soon</p>
                    </CardContent>
                  </Card>
                )}

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          required
                          className="placeholder:text-primary-foreground text-primary-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          required
                          className="placeholder:text-primary-foreground text-primary-foreground"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="placeholder:text-primary-foreground text-primary-foreground"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-accent">
                        <RadioGroupItem value="stripe" id="stripe" />
                        <Label htmlFor="stripe" className="flex items-center cursor-pointer flex-1">
                          <CreditCard className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">Credit/Debit Card</p>
                            <p className="text-sm text-muted-foreground">Pay securely with Stripe</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-accent">
                        <RadioGroupItem value="mobile-money" id="mobile-money" />
                        <Label htmlFor="mobile-money" className="flex items-center cursor-pointer flex-1">
                          <Wallet className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">Mobile Money</p>
                            <p className="text-sm text-muted-foreground">MTN, Vodafone, AirtelTigo</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-accent">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex items-center cursor-pointer flex-1">
                          <Banknote className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">Cash on Delivery</p>
                            <p className="text-sm text-muted-foreground">Pay when order arrives</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
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
                        <span>GHS {totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>GHS {deliveryFee.toFixed(2)}</span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>GHS {finalTotal.toFixed(2)}</span>
                    </div>

                    <Button type="submit" className="w-full mt-6" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By placing your order, you agree to our terms and conditions
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
