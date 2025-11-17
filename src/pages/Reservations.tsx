import { useState } from "react";
import { Calendar as CalendarIcon, Users, Clock, MessageSquare, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    location: "",
    specialRequests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    alert(`${type} reservation request submitted! We'll confirm via email shortly.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${restaurantInterior})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">Reserve Your Table</h1>
          <p className="text-xl text-primary-foreground/90">Experience exceptional dining at Elm CafeGh</p>
        </div>
      </section>

      {/* Reservation Content */}
      <section className="py-16 container mx-auto px-4">
        <Tabs defaultValue="regular" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 animate-fade-in-up">
            <TabsTrigger value="regular" className="transition-all duration-300">
              Regular Dining
            </TabsTrigger>
            <TabsTrigger value="private" className="transition-all duration-300">
              Private & Corporate
            </TabsTrigger>
          </TabsList>

          {/* Regular Dining Reservation */}
          <TabsContent value="regular" className="animate-scale-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Table</CardTitle>
                <p className="text-muted-foreground">Reserve a table for your next visit</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, "Regular")} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+233 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Location *
                      </label>
                      <Select name="location" required>
                        <SelectTrigger className="transition-all duration-300 focus:scale-105">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="embassy">Embassy Gardens</SelectItem>
                          <SelectItem value="lennox">The Lennox</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-accent" />
                        Date *
                      </label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="time" className="text-sm font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        Time *
                      </label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-medium flex items-center gap-2">
                        <Users className="h-4 w-4 text-accent" />
                        Guests *
                      </label>
                      <Select name="guests" required>
                        <SelectTrigger className="transition-all duration-300 focus:scale-105">
                          <SelectValue placeholder="Number" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="specialRequests" className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-accent" />
                      Special Requests
                    </label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      placeholder="Any dietary restrictions, occasion, or special requirements..."
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="min-h-[100px] transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Private & Corporate Dining */}
          <TabsContent value="private" className="animate-scale-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-accent" />
                  Private & Corporate Events
                </CardTitle>
                <p className="text-muted-foreground">
                  Host your special events, corporate meetings, or private celebrations
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-lg">Perfect For:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Corporate meetings and business dinners</li>
                    <li>✓ Birthday celebrations and anniversaries</li>
                    <li>✓ Wedding receptions and engagement parties</li>
                    <li>✓ Team building events</li>
                    <li>✓ Product launches and presentations</li>
                  </ul>
                </div>

                <form onSubmit={(e) => handleSubmit(e, "Private/Corporate")} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="private-name" className="text-sm font-medium">
                        Contact Name *
                      </label>
                      <Input
                        id="private-name"
                        placeholder="Your name"
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="private-company" className="text-sm font-medium">
                        Company/Organization
                      </label>
                      <Input
                        id="private-company"
                        placeholder="Company name (optional)"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="private-email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="private-email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="private-phone" className="text-sm font-medium">
                        Phone *
                      </label>
                      <Input
                        id="private-phone"
                        type="tel"
                        placeholder="+233 XX XXX XXXX"
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="private-date" className="text-sm font-medium">
                        Preferred Date *
                      </label>
                      <Input
                        id="private-date"
                        type="date"
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="private-guests" className="text-sm font-medium">
                        Expected Guests *
                      </label>
                      <Input
                        id="private-guests"
                        type="number"
                        placeholder="Number of guests"
                        min="10"
                        required
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="private-location" className="text-sm font-medium">
                        Preferred Location *
                      </label>
                      <Select required>
                        <SelectTrigger className="transition-all duration-300 focus:scale-105">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="embassy">Embassy Gardens</SelectItem>
                          <SelectItem value="lennox">The Lennox</SelectItem>
                          <SelectItem value="either">Either Location</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="private-event-type" className="text-sm font-medium">
                      Event Type *
                    </label>
                    <Select required>
                      <SelectTrigger className="transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate Meeting/Dinner</SelectItem>
                        <SelectItem value="birthday">Birthday Celebration</SelectItem>
                        <SelectItem value="wedding">Wedding/Engagement</SelectItem>
                        <SelectItem value="team">Team Building Event</SelectItem>
                        <SelectItem value="product">Product Launch</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="private-details" className="text-sm font-medium">
                      Event Details & Requirements *
                    </label>
                    <Textarea
                      id="private-details"
                      placeholder="Please describe your event, catering preferences, AV requirements, special arrangements, budget range, etc."
                      className="min-h-[150px] transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    Request Private Event Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;
