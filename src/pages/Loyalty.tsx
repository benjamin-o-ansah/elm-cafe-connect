import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import ReviewsSection from "@/components/ReviewsSection";
import AIChatbot from "@/components/AIChatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import elegantBg from "@/assets/bg-img.png";

const Loyalty = () => {
  return (
    <div className="min-h-screen bg-background">
      <div 
              className="fixed inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
            />
      <Navigation />
      
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Rewards & Community
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Join our loyalty program and see what our community is saying
            </p>
          </div>

          <Tabs defaultValue="loyalty" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="loyalty" className="text-primary data-[state=active]:text-primary-foreground">Loyalty Program</TabsTrigger>
              <TabsTrigger value="reviews" className="text-primary data-[state=active]:text-primary-foreground">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="loyalty" className="animate-fade-in">
              <LoyaltyProgram />
            </TabsContent>
            
            <TabsContent value="reviews" className="animate-fade-in">
              <ReviewsSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
      <AIChatbot />
      <WhatsAppButton />
    </div>
  );
};

export default Loyalty;
