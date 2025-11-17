import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import menuHero from "@/assets/menu-hero.jpg";
import avocadoToast from "@/assets/menu/avocado-toast.jpg";
import classicBreakfast from "@/assets/menu/classic-breakfast.jpg";
import chickenSalad from "@/assets/menu/chicken-salad.jpg";
import jollofRice from "@/assets/menu/jollof-rice.jpg";
import latte from "@/assets/menu/latte.jpg";
import smoothie from "@/assets/menu/smoothie.jpg";
import chocolateCake from "@/assets/menu/chocolate-cake.jpg";
import fruitTart from "@/assets/menu/fruit-tart.jpg";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = ["all", "breakfast", "lunch", "beverages", "desserts"];
  const dietaryOptions = ["vegetarian", "vegan", "gluten-free", "dairy-free"];

  const menuItems = [
    {
      id: 1,
      name: "Avocado Toast",
      description: "Freshly mashed avocado on artisan sourdough with cherry tomatoes and seeds",
      ingredients: ["Avocado", "Sourdough bread", "Cherry tomatoes", "Pumpkin seeds", "Olive oil", "Microgreens"],
      price: "45 GHS",
      category: "breakfast",
      dietary: ["vegetarian", "vegan"],
      image: avocadoToast,
    },
    {
      id: 2,
      name: "Classic Breakfast",
      description: "Eggs, bacon, sausage, beans, toast, and grilled tomatoes",
      ingredients: ["Free-range eggs", "Bacon", "Pork sausages", "Baked beans", "Sourdough toast", "Grilled tomatoes"],
      price: "55 GHS",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 3,
      name: "Grilled Chicken Salad",
      description: "Mixed greens, grilled chicken, avocado, nuts, and honey mustard dressing",
      ingredients: ["Mixed greens", "Grilled chicken breast", "Avocado", "Walnuts", "Cherry tomatoes", "Honey mustard"],
      price: "65 GHS",
      category: "lunch",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    {
      id: 4,
      name: "Jollof Rice Bowl",
      description: "Traditional Ghanaian jollof rice with grilled chicken and plantain",
      ingredients: ["Basmati rice", "Tomatoes", "Peppers", "Onions", "Grilled chicken", "Fried plantain", "Spices"],
      price: "70 GHS",
      category: "lunch",
      dietary: ["gluten-free", "dairy-free"],
      image: jollofRice,
    },
    {
      id: 5,
      name: "Signature Latte",
      description: "Smooth espresso with steamed milk and latte art",
      ingredients: ["Espresso", "Whole milk", "Optional: Vanilla/Caramel syrup"],
      price: "25 GHS",
      category: "beverages",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 6,
      name: "Fresh Fruit Smoothie",
      description: "Blend of seasonal fruits, yogurt, and honey",
      ingredients: ["Banana", "Berries", "Mango", "Greek yogurt", "Honey", "Almond milk"],
      price: "30 GHS",
      category: "beverages",
      dietary: ["vegetarian", "gluten-free"],
      image: smoothie,
    },
    {
      id: 7,
      name: "Chocolate Cake",
      description: "Rich, decadent chocolate cake with ganache frosting",
      ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Cocoa powder", "Ganache"],
      price: "35 GHS",
      category: "desserts",
      dietary: ["vegetarian"],
      image: chocolateCake,
    },
    {
      id: 8,
      name: "Fruit Tart",
      description: "Buttery tart shell with custard and fresh seasonal fruits",
      ingredients: ["Pastry shell", "Vanilla custard", "Strawberries", "Blueberries", "Kiwi", "Glaze"],
      price: "40 GHS",
      category: "desserts",
      dietary: ["vegetarian"],
      image: fruitTart,
    },
  ];

  const toggleDietary = (option: string) => {
    setSelectedDietary((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    const dietaryMatch =
      selectedDietary.length === 0 || selectedDietary.every((diet) => item.dietary.includes(diet));
    return categoryMatch && dietaryMatch;
  });

  const handleDownloadMenu = () => {
    alert("PDF download functionality will be implemented. The menu will be generated as a downloadable PDF.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `url(${menuHero})`,
          }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">Our Menu</h1>
          <p className="text-xl text-primary-foreground/90 mb-6">Crafted with love, served with care</p>
          <Button
            onClick={handleDownloadMenu}
            variant="outline"
            className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground hover:bg-background/20 hover:scale-105 transition-all duration-300"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Full Menu (PDF)
          </Button>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                  : "hover:scale-105 transition-all duration-300"
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Dietary Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-muted-foreground self-center">Filter by:</span>
          {dietaryOptions.map((option) => (
            <Badge
              key={option}
              variant={selectedDietary.includes(option) ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-300 ${
                selectedDietary.includes(option)
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "hover:scale-110"
              }`}
              onClick={() => toggleDietary(option)}
            >
              {option}
            </Badge>
          ))}
          {selectedDietary.length > 0 && (
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-all duration-300"
              onClick={() => setSelectedDietary([])}
            >
              <X className="h-3 w-3 mr-1" />
              Clear
            </Badge>
          )}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fly-in-right overflow-hidden group opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-accent">{item.price}</span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
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

        {filteredItems.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              No items match your filters. Try adjusting your selection.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">Ready to order?</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300">
            Order Online
          </Button>
        </div>
      </section>

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl animate-scale-in">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedItem?.name}</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-accent">{selectedItem.price}</span>
                {selectedItem.dietary.length > 0 && (
                  <div className="flex gap-2">
                    {selectedItem.dietary.map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-muted-foreground">{selectedItem.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {selectedItem.ingredients.map((ingredient: string, idx: number) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Add to Order
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <AIChatbot />
      <WhatsAppButton />
    </div>
  );
};

export default Menu;
