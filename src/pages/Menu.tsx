import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import menuHero from "@/assets/menu-hero.jpg";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "breakfast", "lunch", "beverages", "desserts"];

  const menuItems = [
    {
      id: 1,
      name: "Avocado Toast",
      description: "Freshly mashed avocado on artisan sourdough with cherry tomatoes and seeds",
      price: "45 GHS",
      category: "breakfast",
      dietary: ["vegetarian"],
    },
    {
      id: 2,
      name: "Classic Breakfast",
      description: "Eggs, bacon, sausage, beans, toast, and grilled tomatoes",
      price: "55 GHS",
      category: "breakfast",
      dietary: [],
    },
    {
      id: 3,
      name: "Grilled Chicken Salad",
      description: "Mixed greens, grilled chicken, avocado, nuts, and honey mustard dressing",
      price: "65 GHS",
      category: "lunch",
      dietary: ["gluten-free"],
    },
    {
      id: 4,
      name: "Jollof Rice Bowl",
      description: "Traditional Ghanaian jollof rice with grilled chicken and plantain",
      price: "70 GHS",
      category: "lunch",
      dietary: [],
    },
    {
      id: 5,
      name: "Signature Latte",
      description: "Smooth espresso with steamed milk and latte art",
      price: "25 GHS",
      category: "beverages",
      dietary: ["vegetarian"],
    },
    {
      id: 6,
      name: "Fresh Fruit Smoothie",
      description: "Blend of seasonal fruits, yogurt, and honey",
      price: "30 GHS",
      category: "beverages",
      dietary: ["vegetarian", "gluten-free"],
    },
    {
      id: 7,
      name: "Chocolate Cake",
      description: "Rich, decadent chocolate cake with ganache frosting",
      price: "35 GHS",
      category: "desserts",
      dietary: ["vegetarian"],
    },
    {
      id: 8,
      name: "Fruit Tart",
      description: "Buttery tart shell with custard and fresh seasonal fruits",
      price: "40 GHS",
      category: "desserts",
      dietary: ["vegetarian"],
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${menuHero})`,
          }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">Our Menu</h1>
          <p className="text-xl text-primary-foreground/90">Crafted with love, served with care</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : ""
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                  <span className="text-lg font-bold text-accent">{item.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                {item.dietary.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.dietary.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to order?</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Order Online
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
