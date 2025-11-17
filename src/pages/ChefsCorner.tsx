import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import chefHero from "@/assets/chef-hero.jpg";
import elegantBg from "@/assets/elegant-background.jpg";

const ChefsCorner = () => {
  const chefs = [
    {
      name: "Chef Kwame Osei",
      role: "Executive Chef",
      bio: "With over 15 years of culinary excellence, Chef Kwame brings a fusion of traditional Ghanaian flavors and contemporary techniques to Elm Café.",
      specialty: "Contemporary African Cuisine",
    },
    {
      name: "Chef Ama Mensah",
      role: "Pastry Chef",
      bio: "A master of desserts and pastries, Chef Ama creates stunning confections that blend local ingredients with international techniques.",
      specialty: "Artisanal Pastries & Desserts",
    },
  ];

  const signatureDishes = [
    {
      name: "Heritage Jollof Rice",
      description: "Our signature dish reimagined with locally sourced ingredients and a modern presentation that honors tradition.",
      philosophy: "We believe in celebrating Ghana's culinary heritage while embracing innovation.",
    },
    {
      name: "Sustainable Seafood Platter",
      description: "Fresh catch from local fishermen, prepared with respect for both the ocean and traditional cooking methods.",
      philosophy: "Sustainability is at the heart of everything we create.",
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${chefHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Chef's Corner
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Meet the culinary artists behind Elm Café's extraordinary dining experience
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Culinary Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Elm Café, we believe that exceptional food starts with exceptional ingredients. Our chefs work closely with local farmers and suppliers to source the freshest, most sustainable ingredients. Every dish tells a story of quality, sustainability, and the rich culinary heritage of Ghana, reimagined for the modern palate.
          </p>
        </div>

        {/* Chef Profiles */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {chefs.map((chef, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all animate-scale-in">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{chef.name}</h3>
                <p className="text-accent font-semibold mb-4">{chef.role}</p>
                <p className="text-muted-foreground mb-4">{chef.bio}</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-semibold text-primary">Specialty:</p>
                  <p className="text-sm text-muted-foreground">{chef.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Signature Dishes */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Signature Creations</h2>
          <div className="space-y-8">
            {signatureDishes.map((dish, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all animate-fade-in">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">{dish.name}</h3>
                  <p className="text-muted-foreground mb-4">{dish.description}</p>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-sm italic text-muted-foreground">{dish.philosophy}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ChefsCorner;
