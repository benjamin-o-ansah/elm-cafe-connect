import { useState } from "react";
import { Gift, CreditCard, Mail, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [50, 100, 150, 200, 300, 500];

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gift card purchase functionality will be implemented with payment integration.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <Gift className="h-16 w-16 text-accent mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Gift Cards & Vouchers</h1>
          <p className="text-xl text-muted-foreground">
            Share the joy of exceptional dining with your loved ones
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Purchase Form */}
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl">Purchase Gift Card</CardTitle>
              <p className="text-muted-foreground">Perfect for any occasion</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePurchase} className="space-y-6">
                {/* Amount Selection */}
                <div className="space-y-4">
                  <label className="text-sm font-medium">Select Amount (GHS)</label>
                  <div className="grid grid-cols-3 gap-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`p-4 rounded-lg border-2 font-semibold transition-all duration-300 hover:scale-105 ${
                          selectedAmount === amount
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border hover:border-accent"
                        }`}
                      >
                        {amount} GHS
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      min="20"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                {/* Recipient Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    Recipient Information
                  </h3>
                  <Input
                    placeholder="Recipient Name"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                  <Input
                    type="email"
                    placeholder="Recipient Email"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                  <Textarea
                    placeholder="Personal Message (Optional)"
                    className="min-h-[100px] transition-all duration-300 focus:scale-105"
                  />
                </div>

                {/* Sender Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-accent" />
                    Your Information
                  </h3>
                  <Input
                    placeholder="Your Name"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                {/* Delivery Method */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Delivery Method</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="delivery" value="email" defaultChecked />
                      <span className="text-sm">Email Delivery (Instant)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="delivery" value="scheduled" />
                      <span className="text-sm">Schedule for Later</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300"
                  size="lg"
                  disabled={!selectedAmount && !customAmount}
                >
                  Purchase Gift Card
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information & Features */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent" />
                  Why Choose Our Gift Cards?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Perfect for Any Occasion</h4>
                    <p className="text-sm text-muted-foreground">
                      Birthdays, anniversaries, holidays, or just because
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instant Digital Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      Email delivery or schedule for a special date
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <CreditCard className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No Expiration Date</h4>
                    <p className="text-sm text-muted-foreground">Use anytime at either location</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <Badge className="bg-accent text-accent-foreground h-6 w-6 rounded-full flex items-center justify-center p-0">
                    1
                  </Badge>
                  <p className="text-sm flex-1">Choose your gift card amount and add a personal message</p>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-accent text-accent-foreground h-6 w-6 rounded-full flex items-center justify-center p-0">
                    2
                  </Badge>
                  <p className="text-sm flex-1">Complete your purchase securely</p>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-accent text-accent-foreground h-6 w-6 rounded-full flex items-center justify-center p-0">
                    3
                  </Badge>
                  <p className="text-sm flex-1">Recipient receives the gift card via email</p>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-accent text-accent-foreground h-6 w-6 rounded-full flex items-center justify-center p-0">
                    4
                  </Badge>
                  <p className="text-sm flex-1">They enjoy delicious meals at Elm CafeGh!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Terms & Conditions</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Gift cards can be used at any Elm CafeGh location</li>
                  <li>• No expiration date - use anytime</li>
                  <li>• Non-refundable and cannot be exchanged for cash</li>
                  <li>• Can be combined with other promotions</li>
                  <li>• Balance inquiries available via email</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GiftCards;
