import { Star, ThumbsUp, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Kwame Mensah",
      avatar: "KM",
      rating: 5,
      date: "2 weeks ago",
      platform: "Google",
      text: "Absolutely love this place! The coffee is exceptional and the ambiance is perfect for both work and relaxation. The staff is incredibly friendly and attentive.",
      helpful: 24,
    },
    {
      id: 2,
      name: "Ama Osei",
      avatar: "AO",
      rating: 5,
      date: "1 month ago",
      platform: "TripAdvisor",
      text: "Best cafe in Accra! Their jollof rice is to die for, and the desserts are heavenly. Great location at Embassy Gardens. Will definitely be back!",
      helpful: 18,
    },
    {
      id: 3,
      name: "John Doe",
      avatar: "JD",
      rating: 4,
      date: "3 weeks ago",
      platform: "Google",
      text: "Great spot for brunch! The avocado toast is delicious and the smoothies are fresh. Service is quick and the atmosphere is cozy. Highly recommend!",
      helpful: 15,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      avatar: "SW",
      rating: 5,
      date: "1 week ago",
      platform: "Google",
      text: "The perfect blend of quality food and excellent service. Their private dining area is ideal for business meetings. The chef's specials never disappoint!",
      helpful: 31,
    },
  ];

  const stats = {
    averageRating: 4.8,
    totalReviews: 248,
    breakdown: [
      { stars: 5, count: 198, percentage: 80 },
      { stars: 4, count: 37, percentage: 15 },
      { stars: 3, count: 10, percentage: 4 },
      { stars: 2, count: 2, percentage: 1 },
      { stars: 1, count: 1, percentage: 0 },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Overall Rating */}
      <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 animate-fade-in">
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Overall Score */}
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-2">{stats.averageRating}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 ${
                      star <= Math.round(stats.averageRating) ? "fill-accent text-accent" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">Based on {stats.totalReviews} reviews</p>
              <div className="flex gap-2 justify-center mt-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Google Reviews
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  TripAdvisor
                </Button>
              </div>
            </div>

            {/* Right: Rating Breakdown */}
            <div className="space-y-3">
              {stats.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-8">{item.stars}★</span>
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-accent h-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-primary">Customer Reviews</h3>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Write a Review</Button>
        </div>

        <div className="grid gap-4">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.name}`} />
                    <AvatarFallback>{review.avatar}</AvatarFallback>
                  </Avatar>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating ? "fill-accent text-accent" : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {review.platform}
                          </Badge>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>

                    <p className="text-muted-foreground mb-3">{review.text}</p>

                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-accent">
                      <ThumbsUp className="h-4 w-4" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Share Your Experience CTA */}
      <Card className="bg-muted/50 border-dashed">
        <CardContent className="pt-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Share Your Experience!</h3>
          <p className="text-muted-foreground mb-4">
            We'd love to hear about your visit to Elm Cafe. Your feedback helps us improve.
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" className="gap-2">
              <Star className="h-4 w-4" />
              Leave a Review
            </Button>
            <Button variant="outline" className="gap-2">
              📸 Share Photos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewsSection;
