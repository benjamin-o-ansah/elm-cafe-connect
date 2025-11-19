import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import blogHero from "@/assets/blog-hero.jpg";
import elegantBg from "@/assets/elegant-background.jpg";

const Blog = () => {
  const articles = [
    {
      title: "The Art of Coffee: From Bean to Cup",
      excerpt: "Discover the journey of our specialty coffee and what makes each cup extraordinary.",
      author: "Chef Kwame Osei",
      date: "March 15, 2024",
      category: "Coffee Culture",
    },
    {
      title: "Sustainable Dining: Our Commitment to Local Ingredients",
      excerpt: "Learn how we partner with local farmers to bring the freshest ingredients to your plate.",
      author: "Ama Mensah",
      date: "March 10, 2024",
      category: "Sustainability",
    },
    {
      title: "Wine Pairing Guide: Perfect Matches for Your Meal",
      excerpt: "Expert tips on selecting the perfect wine to complement your dining experience.",
      author: "Sommelier Team",
      date: "March 5, 2024",
      category: "Wine & Spirits",
    },
    {
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt: "Get an exclusive look at how our culinary team prepares for a busy service day.",
      author: "Chef Kwame Osei",
      date: "February 28, 2024",
      category: "Kitchen Stories",
    },
    {
      title: "Seasonal Menu Highlights: Spring Collection",
      excerpt: "Explore the fresh flavors and innovative dishes featured in our spring menu.",
      author: "Culinary Team",
      date: "February 20, 2024",
      category: "Menu Updates",
    },
    {
      title: "The Perfect Brunch: Tips from Our Chefs",
      excerpt: "Discover the secrets to creating an unforgettable brunch experience at home.",
      author: "Chef Ama Mensah",
      date: "February 15, 2024",
      category: "Lifestyle",
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Food Journal
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Stories, tips, and insights from the world of culinary excellence
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all animate-scale-in group">
              <CardContent className="pt-6">
                <div className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
