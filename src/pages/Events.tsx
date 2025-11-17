import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import eventImg from "@/assets/event-1.jpg";
import elegantBg from "@/assets/elegant-background.jpg";

const Events = () => {
  const { toast } = useToast();

  const events = [
    {
      title: "Wine Tasting Evening",
      date: "April 15, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "The Lennox",
      capacity: "30 guests",
      description: "Join us for an exclusive wine tasting event featuring premium selections paired with our signature dishes.",
      price: "GHS 250 per person",
    },
    {
      title: "Chef's Table Experience",
      date: "April 22, 2024",
      time: "6:30 PM - 9:30 PM",
      location: "Embassy Gardens",
      capacity: "12 guests",
      description: "An intimate dining experience where Chef Kwame presents a 7-course tasting menu with wine pairings.",
      price: "GHS 400 per person",
    },
    {
      title: "Sunday Jazz Brunch",
      date: "Every Sunday",
      time: "10:00 AM - 2:00 PM",
      location: "Both Locations",
      capacity: "50 guests per location",
      description: "Enjoy live jazz music while indulging in our extensive brunch menu featuring both local and international favorites.",
      price: "GHS 180 per person",
    },
    {
      title: "Cooking Masterclass: Traditional Ghanaian Cuisine",
      date: "April 30, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Embassy Gardens",
      capacity: "15 guests",
      description: "Learn to prepare authentic Ghanaian dishes with modern techniques from our executive chef.",
      price: "GHS 300 per person",
    },
  ];

  const handleRSVP = (eventTitle: string) => {
    toast({
      title: "RSVP Received!",
      description: `Thank you for your interest in ${eventTitle}. We'll contact you shortly to confirm your booking.`,
    });
  };

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
          style={{ backgroundImage: `url(${eventImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Events Calendar
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join us for exclusive dining experiences, tastings, and culinary events
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {events.map((event, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-4">{event.title}</h3>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-primary">Date</p>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-primary">Time</p>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-primary">Location</p>
                          <p className="text-sm text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-primary">Capacity</p>
                          <p className="text-sm text-muted-foreground">{event.capacity}</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg font-semibold text-accent mb-4">{event.price}</p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    onClick={() => handleRSVP(event.title)}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground md:self-center"
                  >
                    RSVP Now
                  </Button>
                </div>
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

export default Events;
