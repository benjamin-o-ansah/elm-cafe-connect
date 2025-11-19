import { Link } from "react-router-dom";
import { Coffee, ShoppingBag, Calendar, Gift, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import heroImage from "@/assets/hero-cafe.jpg";
import elegantBg from "@/assets/elegant-background.jpg";
import homeBgVid from "@/assets/home_bg.mp4";

const Index = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Online Ordering",
      description: "Order your favorites for delivery or pickup",
    },
    {
      icon: Calendar,
      title: "Easy Reservations",
      description: "Book your table in just a few clicks",
    },
    {
      icon: Gift,
      title: "Gift Cards",
      description: "Perfect for friends and family",
    },
    {
      icon: Star,
      title: "Loyalty Rewards",
      description: "Earn points with every purchase",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={homeBgVid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/10" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">Welcome to Elm CafeGh</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of quality, sustainability, and local flavors in the heart of Accra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                View Menu
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground hover:bg-background/20 text-lg px-8"
              >
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Elm Cafe ?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to providing an exceptional dining experience with convenient features designed for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Visit Us</h2>
            <p className="text-muted-foreground text-lg">Find us at these convenient locations in Accra</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Embassy Gardens</h3>
                    <p className="text-muted-foreground mb-2">Accra, Ghana</p>
                    <p className="text-foreground font-medium pb-4">+233 59 281 6692</p>
                    <Link to="/contact">
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                        View on Map
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 ">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">The Lennox</h3>
                    <p className="text-muted-foreground mb-2">Accra, Ghana</p>
                    <p className="text-foreground font-medium pb-4">+233 53 044 1580</p>
                    <Link to="/contact">
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                        View On Map
                      </Button>
                    </Link>
                  </div>
                  <div></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center">
          <Coffee className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Experience Elm Cafe?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join us today and discover why we're Accra's favorite cafe destination
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 text-lg px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
