import { Heart, Leaf, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We source the finest ingredients and prepare every dish with care and attention to detail.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and supporting local farmers and producers.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Creating a welcoming space where people connect over great food and conversation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuously improving to deliver the best dining experience in Accra.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Elm CafeGh</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              More than just a cafe - we're a community hub dedicated to redefining the dining experience
              in Accra through quality, sustainability, and genuine hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in the heart of Accra, Elm CafeGh was born from a simple vision: to create a space
                where quality food, sustainable practices, and community spirit come together.
              </p>
              <p>
                We believe that every meal should be an experience - from the carefully selected local
                ingredients to the warm atmosphere that welcomes you the moment you step through our doors.
              </p>
              <p>
                Today, with two locations serving the Accra community, we continue to grow while staying
                true to our core values of quality, sustainability, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
          <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Team</h2>
            <p className="text-muted-foreground leading-relaxed">
              Behind every great meal is a dedicated team of passionate professionals. From our skilled
              baristas to our talented chefs, everyone at Elm CafeGh is committed to making your visit
              exceptional. We're proud to be a local employer, providing opportunities and training to
              talented individuals across Accra.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
      <WhatsAppButton />
    </div>
  );
};

export default About;
