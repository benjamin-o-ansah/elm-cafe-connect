import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import elegantBg from "@/assets/bg-img.png";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
      />
      <Navigation />
<div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-muted mb-6">Get in Touch</h1>
          <p className="text-xl text-muted">
            We'd love to hear from you. Visit us or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16 container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Embassy Gardens</h3>
              <p className="text-sm text-muted-foreground">Accra, Ghana</p>
              <p className="text-sm font-medium text-foreground mt-2">+233 59 281 6692</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">The Lennox</h3>
              <p className="text-sm text-muted-foreground">Accra, Ghana</p>
              <p className="text-sm font-medium text-foreground mt-2">+233 53 044 1580</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Email Us</h3>
              <a
                href="mailto:management@elmcafegh.com"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                management@elmcafe.com
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Opening Hours</h3>
              <p className="text-sm text-muted-foreground">Mon-Sat: 6:30 AM - 10:00 PM</p>
              <p className="text-sm text-muted-foreground">Sun: 8:00 AM - 8:00 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Location Maps */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-primary mb-4">Embassy Gardens Location</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.878186913035!2d-0.17029642417779411!3d5.585017533355458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b7d87c1bfc5%3A0x6c5f1f73e4f340d5!2sElm%20Cafe%20Embassy%20Gardens!5e0!3m2!1sen!2sgh!4v1763578070577!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Embassy Gardens Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-primary mb-4">The Lennox Location</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.733860807895!2d-0.18865422417770972!3d5.606273333140376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9be0fb1377d9%3A0x684b039a9f83a43!2sElm%20Caf%C3%A9%20at%20The%20Lennox!5e0!3m2!1sen!2sgh!4v1763578152022!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Lennox Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                    <Input placeholder="Your name" required className="placeholder:text-muted"/>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" required className="placeholder:text-muted" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input placeholder="How can we help?" required className="placeholder:text-muted"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us more..."
                    className="min-h-[150px] placeholder:text-muted"
                    required
                   
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;
