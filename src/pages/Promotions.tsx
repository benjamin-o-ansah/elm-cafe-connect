import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Percent, Gift, Clock, Coffee, Utensils, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import promoBanner from "@/assets/promo-banner.jpg";
import elegantBg from "@/assets/bg-img.png";

const Promotions = () => {
  const currentPromotions = [
    {
      id: 1,
      title: "Happy Hour Special",
      description: "20% off all beverages from 3 PM - 6 PM, Monday to Friday",
      discount: "20% OFF",
      validUntil: "Ongoing",
      icon: Clock,
      color: "text-amber-500",
      active: true,
    },
    {
      id: 2,
      title: "Weekend Brunch Deal",
      description: "Get a free coffee with any breakfast order on Saturday & Sunday",
      discount: "Free Coffee",
      validUntil: "Every Weekend",
      icon: Coffee,
      color: "text-accent",
      active: true,
    },
    {
      id: 3,
      title: "Lunch Combo",
      description: "Main course + beverage + dessert for special price",
      discount: "Save 15 GHS",
      validUntil: "12 PM - 3 PM Daily",
      icon: Utensils,
      color: "text-orange-500",
      active: true,
    },
    {
      id: 4,
      title: "First-Time Visitor",
      description: "15% off your entire order on your first visit",
      discount: "15% OFF",
      validUntil: "One-time use",
      icon: Sparkles,
      color: "text-purple-500",
      active: true,
    },
  ];

  const seasonalOffers = [
    {
      id: 5,
      title: "Chef's Special",
      description: "Try our featured seasonal dish at a special price",
      discount: "Limited Time",
      validUntil: "This Month",
      icon: Utensils,
      color: "text-red-500",
    },
    {
      id: 6,
      title: "Birthday Celebration",
      description: "Complimentary dessert for birthday celebrants with ID",
      discount: "FREE",
      validUntil: "Year-round",
      icon: Gift,
      color: "text-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${promoBanner})` }}
        >
          <div className="absolute inset-0 bg-primary/40" />
        </div>

        <div className="relative z-10 text-center animate-fade-in">
          <Percent className="h-16 w-16 text-primary-foreground-foreground mx-auto mb-4 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground-foreground mb-4">
            Special Offers & Promotions
          </h1>
          <p className="text-xl text-primary-foreground-foreground/90">
            Enjoy great savings on your favorite dishes and beverages
          </p>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Current Promotions</h2>
          <p className="text-muted text-lg">Take advantage of these amazing deals today</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentPromotions.map((promo, index) => (
            <Card
              key={promo.id}
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                {promo.discount}
              </div>
              <CardContent className="pt-12">
                <div className={`${promo.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <promo.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{promo.title}</h3>
                <p className="text-muted-foreground mb-4">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {promo.validUntil}
                  </Badge>
                  {promo.active && (
                    <Badge className="bg-green-500 text-muted">Active</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seasonal Offers */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Seasonal & Special Offers</h2>
          <p className="text-muted text-lg">Limited-time deals you don't want to miss</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {seasonalOffers.map((offer, index) => (
            <Card
              key={offer.id}
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`${offer.color} bg-muted p-3 rounded-full transition-transform duration-300 group-hover:scale-110`}>
                    <offer.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-primary">{offer.title}</h3>
                      <Badge className="bg-accent text-muted">{offer.discount}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{offer.description}</p>
                    <Badge variant="outline" className="text-xs">
                      Valid: {offer.validUntil}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup CTA */}
        <div className="bg-gradient-to-r from-background to-secondary rounded-2xl p-12 text-center animate-fade-in-up">
          <Gift className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive exclusive offers, seasonal promotions, and be the first to
            know about our special events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg flex-1 text-foreground"
            />
            <Button className="bg-background text-primary-foreground hover:bg-background/90 px-8">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotions;
