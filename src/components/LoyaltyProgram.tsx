import { Trophy, Gift, Star, Crown, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const LoyaltyProgram = () => {
  const tiers = [
    {
      name: "Coffee Lover",
      icon: Star,
      points: "0-499",
      color: "text-amber-600",
      benefits: ["5% discount", "Birthday treat", "Early access to new menu items"],
    },
    {
      name: "Cafe Regular",
      icon: Trophy,
      points: "500-999",
      color: "text-amber-500",
      benefits: ["10% discount", "Free delivery", "Priority reservations", "Exclusive events"],
    },
    {
      name: "Elite Member",
      icon: Crown,
      points: "1000+",
      color: "text-amber-400",
      benefits: ["15% discount", "Free birthday meal", "VIP dining area", "Personal chef consultation"],
    },
  ];

  const rewards = [
    { name: "Free Beverage", points: 100, icon: Gift },
    { name: "10% Off Next Order", points: 200, icon: Star },
    { name: "Free Dessert", points: 150, icon: Award },
    { name: "Free Meal (up to GHS 50)", points: 500, icon: Trophy },
  ];

  return (
    <div className="space-y-8">
      {/* Current Status Card */}
      <Card className="border-accent/20 shadow-lg animate-fade-in">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Star className="h-6 w-6 text-secondary" />
              Your Loyalty Status
            </CardTitle>
            <Badge variant="secondary" className="text-lg px-4 py-2 text-muted">
              Coffee Lover
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Current Points</span>
              <span className="font-semibold">350 / 500</span>
            </div>
            <Progress value={70} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">150 points until Cafe Regular tier!</p>
          </div>
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Join Loyalty Program
          </Button>
        </CardContent>
      </Card>

      {/* Membership Tiers */}
      <div>
        <h3 className="text-2xl font-bold text-muted mb-6">Membership Tiers</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <tier.icon className={`h-12 w-12 ${tier.color} mb-3`} />
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <Badge variant="outline" className="mt-2">
                    {tier.points} points
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Star className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Rewards Catalog */}
      <div>
        <h3 className="text-2xl font-bold text-primary-foreground mb-6">Rewards Catalog</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rewards.map((reward, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <reward.icon className="h-10 w-10 text-background mx-auto mb-3" />
                <h4 className="font-semibold mb-2">{reward.name}</h4>
                <Badge variant="secondary" className="text-muted">{reward.points} points</Badge>
                <Button variant="outline" className="w-full mt-4 text-muted">
                  Redeem
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <Card className="">
        <CardHeader>
          <CardTitle className="text-xl">How to Earn Points</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Star className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <strong>Every Purchase:</strong> Earn 1 point for every GHS 1 spent
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Gift className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <strong>Sign Up Bonus:</strong> Get 100 points when you join
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Trophy className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <strong>Birthday Bonus:</strong> Receive 200 bonus points on your birthday month
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <strong>Referral Rewards:</strong> Get 150 points for each friend who joins
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoyaltyProgram;
