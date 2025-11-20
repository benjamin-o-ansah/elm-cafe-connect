import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Wine, Calendar, ChefHat, Lightbulb, PlayCircle } from "lucide-react";
import chefHero from "@/assets/chef-hero.jpg";
import chefRichard from "@/assets/chef-richard.jpg";
import chefAma from "@/assets/chef-ama.jpg";
import kitchenBts from "@/assets/kitchen-bts.jpg";
import ingredientPrep from "@/assets/ingredient-prep.jpg";
import platingArt from "@/assets/plating-art.jpg";
import winePairing from "@/assets/wine-pairing.jpg";
import elegantBg from "@/assets/bg-img.png";

const ChefsCorner = () => {
  const chefs = [
    {
      name: "Chef Richard Cobbinah Johnson",
      role: "Chef de Parte",
      image: chefRichard,
      bio: "With over 7 years of culinary excellence, Chef Kwame brings a fusion of traditional Ghanaian flavors and contemporary techniques to Elm Café. Born in Kumasi and trained at Le Cordon Bleu Paris, he returned to Ghana with a mission to elevate local cuisine to international standards.",
      specialty: "Contemporary African Cuisine",
      philosophy: "Food is not just sustenance; it's a bridge between cultures, generations, and memories. I believe in honoring our rich Ghanaian heritage while embracing modern culinary innovations. Every dish tells a story of the land, the farmers, and the traditions that shaped it.",
      signature: "Heritage Jollof Rice with Grilled Prawns",
      qa: [
        { q: "What inspired you to become a chef?", a: "Growing up, I watched my grandmother cook traditional dishes with such love and precision. She taught me that cooking is an act of care and creativity. That passion never left me." },
        { q: "Your favorite ingredient?", a: "Shito pepper—it's versatile, bold, and uniquely Ghanaian. It can transform any dish from good to unforgettable." },
        { q: "Advice for home cooks?", a: "Don't be afraid to experiment, but always respect your ingredients. Quality over quantity, and patience over perfection." }
      ]
    },
    {
      name: "Chef Ama Mensah",
      role: "Pastry Chef",
      image: chefAma,
      bio: "A master of desserts and pastries, Chef Ama creates stunning confections that blend local ingredients with international techniques. Trained in Switzerland and inspired by her Ghanaian roots, she brings artistry and precision to every creation.",
      specialty: "Artisanal Pastries & Desserts",
      philosophy: "Desserts should be an experience—a moment of pure joy. I strive to create pastries that not only look beautiful but celebrate local flavors like coconut, plantain, and tropical fruits in ways that surprise and delight.",
      signature: "Coconut & Passion Fruit Tart",
      qa: [
        { q: "What's your creative process?", a: "I start with seasonal ingredients and let them guide me. Inspiration comes from everywhere—nature, art, even conversations with guests." },
        { q: "Most challenging dessert?", a: "Creating a dessert that balances traditional flavors with modern presentation. It requires precision and deep understanding of both worlds." },
        { q: "Secret to perfect pastries?", a: "Temperature control and patience. Pastry is a science, and respecting the process always yields the best results." }
      ]
    },
  ];

  const behindTheScenes = [
    {
      title: "Our Immaculate Kitchen",
      image: kitchenBts,
      description: "Step into our state-of-the-art kitchen where precision meets passion. Our team maintains the highest standards of cleanliness and organization, ensuring every dish is prepared in an environment that reflects our commitment to excellence.",
      details: "We use separate stations for different cuisines, implement rigorous food safety protocols, and invest in the best equipment to support our culinary team's creativity."
    },
    {
      title: "Ingredient Selection",
      image: ingredientPrep,
      description: "We source 80% of our produce from local farmers within a 50km radius. Our chefs visit markets twice weekly to handpick seasonal vegetables, herbs, and proteins that meet our exacting standards.",
      details: "From organic tomatoes grown in Akuapem to free-range chicken from Aburi farms, every ingredient has a story and supports local communities."
    },
    {
      title: "The Art of Plating",
      image: platingArt,
      description: "Presentation is where culinary art meets visual design. Each plate is carefully composed to create balance, contrast, and beauty that enhances the dining experience.",
      details: "Our chefs undergo regular training in plating techniques, learning from international experts while incorporating Ghanaian artistic elements."
    }
  ];

  const signatureDishes = [
    {
      name: "Heritage Jollof Rice",
      story: "This dish represents Chef Kwame's journey from his grandmother's kitchen to Le Cordon Bleu and back home. It's traditional jollof reimagined with premium ingredients and modern techniques, while respecting the soul of the original.",
      ingredients: [
        { name: "Long-grain rice", origin: "Sourced from Volta Region rice farmers" },
        { name: "Fresh tomatoes & peppers", origin: "Organic produce from Akuapem Hills" },
        { name: "Free-range chicken stock", origin: "Made in-house from local chickens" },
        { name: "Bay leaves & thyme", origin: "Grown in our rooftop garden" }
      ],
      pairing: {
        wine: "Rosé or light-bodied red wine",
        why: "The wine's acidity complements the rich tomato base while refreshing the palate between bites",
        cocktail: "Hibiscus Mojito - The floral notes enhance the dish's aromatic spices"
      }
    },
    {
      name: "Sustainable Seafood Platter",
      story: "Inspired by Ghana's coastal heritage, this dish showcases the bounty of the Gulf of Guinea. We work directly with fishing cooperatives to ensure sustainable practices and the freshest catch.",
      ingredients: [
        { name: "Red snapper", origin: "Day-caught by Jamestown fishermen" },
        { name: "Tiger prawns", origin: "Sustainable aquaculture farms in Volta" },
        { name: "Grilled octopus", origin: "Imported from certified sustainable sources" },
        { name: "Shito butter", origin: "House-made with local peppers" }
      ],
      pairing: {
        wine: "Crisp Sauvignon Blanc or Chardonnay",
        why: "The wine's minerality and citrus notes amplify the seafood's natural sweetness",
        cocktail: "Classic Gin & Tonic with lime - Clean and refreshing, perfect complement"
      }
    },
    {
      name: "Wagyu Beef with Palm Nut Reduction",
      story: "East meets West in this fusion masterpiece. Premium Wagyu beef is paired with a traditional palm nut sauce, elevated with French culinary techniques.",
      ingredients: [
        { name: "Wagyu beef", origin: "Premium grade imported beef" },
        { name: "Palm fruit", origin: "Fresh from Eastern Region plantations" },
        { name: "Wild mushrooms", origin: "Foraged locally during season" },
        { name: "Herb crust", origin: "Rooftop garden herbs" }
      ],
      pairing: {
        wine: "Full-bodied Cabernet Sauvignon or Merlot",
        why: "Rich tannins stand up to the beef's marbling while complementing the earthy palm sauce",
        cocktail: "Old Fashioned - The cocktail's depth matches the dish's complexity"
      }
    }
  ];

  const recipes = [
    {
      title: "Chef Kwame's Perfect Jollof at Home",
      difficulty: "Intermediate",
      time: "45 minutes",
      keyTechnique: "The secret is in the tomato base. Blend your tomatoes, peppers, and onions, then fry the mixture until the oil separates and the color deepens to a rich red. This process, called 'frying your base,' is what gives jollof its signature flavor.",
      tips: ["Use long-grain parboiled rice", "Don't stir the rice once it starts cooking", "Let it steam covered for the final 10 minutes"]
    },
    {
      title: "Chef Ama's Coconut Tart Shell Technique",
      difficulty: "Advanced",
      time: "2 hours (includes chilling)",
      keyTechnique: "For a perfectly crisp tart shell, toast your coconut before incorporating it into the dough. Keep all ingredients cold, work quickly, and always blind-bake with weights to prevent bubbling.",
      tips: ["Chill dough for at least 1 hour", "Use parchment and dried beans for blind baking", "Brush with egg wash for extra shine"]
    }
  ];


  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${chefHero})` }}
        >
          <div className="absolute inset-0 " />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Chef's Corner
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
            Meet the culinary artists behind Elm Café's extraordinary dining experience
          </p>
        </div>
      </section>

      {/* Our Culinary Philosophy */}
      <section className="py-20 container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-muted mb-6">Our Culinary Philosophy</h2>
          <p className="text-lg text-muted leading-relaxed">
            At Elm Café, we believe that exceptional food starts with exceptional ingredients. Our chefs work closely with local farmers and suppliers to source the freshest, most sustainable ingredients. Every dish tells a story of quality, sustainability, and the rich culinary heritage of Ghana, reimagined for the modern palate.
          </p>
        </div>

        {/* Chef Profiles with Photos and Interviews */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-muted mb-12 text-center">Meet Our Culinary Team</h2>
          <div className="space-y-12">
            {chefs.map((chef, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-xl transition-all animate-scale-in">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-[400px] md:h-auto">
                    <img 
                      src={chef.image} 
                      alt={chef.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                      <Badge className="mb-2">{chef.specialty}</Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-3xl mb-2">{chef.name}</CardTitle>
                      <p className="text-accent font-semibold text-xl">{chef.role}</p>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{chef.bio}</p>
                      
                      <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                        <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <ChefHat className="h-5 w-5" />
                          Culinary Philosophy
                        </p>
                        <p className="text-sm text-muted-foreground italic">{chef.philosophy}</p>
                      </div>

                      <div className="pt-2">
                        <p className="text-sm font-semibold text-primary mb-1">Signature Dish:</p>
                        <p className="text-sm text-muted-foreground">{chef.signature}</p>
                      </div>

                      {/* Q&A Accordion */}
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="qa" className="border-border">
                          <AccordionTrigger className="hover:text-accent">
                            <span className="flex items-center gap-2">
                              <PlayCircle className="h-4 w-4" />
                              Watch Interview / Read Q&A
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ScrollArea className="h-[250px] pr-4">
                              <div className="space-y-4">
                                {chef.qa.map((item, i) => (
                                  <div key={i} className="border-l-2 border-accent pl-4 py-2">
                                    <p className="font-semibold text-primary text-sm mb-1">Q: {item.q}</p>
                                    <p className="text-sm text-muted-foreground">A: {item.a}</p>
                                  </div>
                                ))}
                              </div>
                            </ScrollArea>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Behind-the-Scenes Content */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-muted mb-12 text-center">Behind the Scenes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {behindTheScenes.map((item, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-xl transition-all animate-fade-in-up">
                <div className="relative h-[250px]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-border">
                      <AccordionTrigger className="text-sm hover:text-accent">
                        Learn More
                      </AccordionTrigger>
                      <AccordionContent>
                        <ScrollArea className="h-[120px]">
                          <p className="text-sm text-muted-foreground">{item.details}</p>
                        </ScrollArea>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Signature Dish Deep Dives */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-primary-foreground mb-12 text-center">Signature Dish Deep Dives</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {signatureDishes.map((dish, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all animate-fade-in overflow-hidden">
                <CardHeader className="bg-muted/30 pb-4">
                  <CardTitle className="text-2xl">{dish.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Story */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      The Story
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{dish.story}</p>
                  </div>

                  {/* Accordion for Ingredients and Pairing */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="ingredients">
                      <AccordionTrigger className="hover:text-accent">
                        Ingredient Breakdown
                      </AccordionTrigger>
                      <AccordionContent>
                        <ScrollArea className="h-[200px]">
                          <div className="space-y-3 pr-4">
                            {dish.ingredients.map((ingredient, i) => (
                              <div key={i} className="bg-muted/50 p-3 rounded-lg">
                                <p className="font-semibold text-primary text-sm">{ingredient.name}</p>
                                <p className="text-xs text-muted-foreground">{ingredient.origin}</p>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="pairing">
                      <AccordionTrigger className="hover:text-accent">
                        <span className="flex items-center gap-2">
                          <Wine className="h-4 w-4" />
                          Pairing Recommendations
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="relative">
                          <img 
                            src={winePairing} 
                            alt="Wine Pairing"
                            className="w-full h-[200px] object-cover rounded-lg mb-4"
                          />
                          <div className="space-y-4">
                            <div className="bg-muted/50 p-4 rounded-lg">
                              <p className="font-semibold text-primary text-sm mb-1">Wine: {dish.pairing.wine}</p>
                              <p className="text-xs text-muted-foreground">{dish.pairing.why}</p>
                            </div>
                            <div className="bg-muted/50 p-4 rounded-lg">
                              <p className="font-semibold text-primary text-sm mb-1">Cocktail: {dish.pairing.cocktail}</p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recipe Spotlights */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-primary-foreground mb-12 text-center">Recipe Spotlights</h2>
          <p className="text-center text-muted mb-8 max-w-2xl mx-auto">
            Learn key techniques from our chefs that you can try at home. These simplified versions focus on mastering essential skills.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {recipes.map((recipe, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-xl">{recipe.title}</CardTitle>
                  <div className="flex gap-4 pt-2">
                    <Badge variant="secondary" className="text-primary-foreground">{recipe.difficulty}</Badge>
                    <Badge variant="default" className="text-primary-foreground">{recipe.time}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="technique">
                      <AccordionTrigger className="hover:text-accent">
                        Key Technique
                      </AccordionTrigger>
                      <AccordionContent>
                        <ScrollArea className="h-[180px]">
                          <p className="text-sm text-muted-foreground mb-4">{recipe.keyTechnique}</p>
                          <div>
                            <p className="font-semibold text-primary text-sm mb-2">Chef's Tips:</p>
                            <ul className="list-disc list-inside space-y-1">
                              {recipe.tips.map((tip, i) => (
                                <li key={i} className="text-xs text-muted-foreground">{tip}</li>
                              ))}
                            </ul>
                          </div>
                        </ScrollArea>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Events & Cooking Classes */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Join Our Culinary Events</CardTitle>
              <p className="text-muted-foreground">
                Experience hands-on cooking classes, wine tastings, and exclusive chef's table dinners
              </p>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4">
                  <Calendar className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold text-primary mb-2">Monthly Cooking Classes</h4>
                  <p className="text-sm text-muted-foreground">Learn from our chefs in intimate group sessions</p>
                </div>
                <div className="p-4">
                  <Wine className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold text-primary mb-2">Wine Pairing Dinners</h4>
                  <p className="text-sm text-muted-foreground">Multi-course meals with sommelier guidance</p>
                </div>
                <div className="p-4">
                  <ChefHat className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <h4 className="font-semibold text-primary mb-2">Chef's Table Experience</h4>
                  <p className="text-sm text-muted-foreground">Private dining in our kitchen with chef interaction</p>
                </div>
              </div>
              <Button size="lg" className="animate-scale-in bg-background" asChild>
                <a href="/events">View Upcoming Events & Book Now</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ChefsCorner;
