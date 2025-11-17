import { useState } from "react";
import { X, Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-cafe.jpg";
import menuHero from "@/assets/menu-hero.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const galleryImages = [
    { id: 1, src: heroImage, alt: "Cafe Interior", category: "interior" },
    { id: 2, src: menuHero, alt: "Gourmet Dishes", category: "food" },
    { id: 3, src: restaurantInterior, alt: "Private Dining", category: "interior" },
    { id: 4, src: heroImage, alt: "Coffee Bar", category: "interior" },
    { id: 5, src: menuHero, alt: "Fresh Pastries", category: "food" },
    { id: 6, src: restaurantInterior, alt: "Elegant Ambiance", category: "interior" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Our Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Experience the ambiance, quality, and passion that defines Elm CafeGh
          </p>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="pb-16 container mx-auto px-4">
        <Card className="relative overflow-hidden animate-scale-in group cursor-pointer max-w-4xl mx-auto">
          <div
            className="relative h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${restaurantInterior})` }}
            onClick={() => setShowVideo(true)}
          >
            <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-background/20 backdrop-blur-sm p-6 rounded-full mb-4 inline-block transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-16 w-16 text-primary-foreground" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Virtual Tour of Elm CafeGh
                </h3>
                <p className="text-primary-foreground/90">Click to experience our restaurant</p>
              </div>
            </div>
          </div>
        </Card>

        <Dialog open={showVideo} onOpenChange={setShowVideo}>
          <DialogContent className="max-w-4xl p-0">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">
                Video tour integration will be added with actual video content
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Photo Gallery */}
      <section className="pb-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12 animate-fade-in-up">
          Photo Gallery
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer group animate-scale-in hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-primary-foreground font-semibold p-4">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage && (
            <img src={selectedImage} alt="Gallery" className="w-full h-auto animate-scale-in" />
          )}
        </DialogContent>
      </Dialog>

      {/* 360 Tour CTA */}
      <section className="pb-16 container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Experience Our Space in 360°
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Take a virtual walk through our restaurant and explore every corner from the comfort of your home
          </p>
          <Button className="bg-background text-primary hover:bg-background/90 px-8 hover:scale-105 transition-all duration-300">
            Launch 360° Virtual Tour
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
