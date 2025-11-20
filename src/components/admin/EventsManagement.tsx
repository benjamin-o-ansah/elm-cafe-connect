import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const EventsManagement = () => {
  const { toast } = useToast();

  // Mock data
  const events = [
    { id: "1", title: "Wine Tasting Evening", date: "2024-12-15", attendees: 45, status: "upcoming" },
    { id: "2", title: "Chef's Table Experience", date: "2024-12-20", attendees: 12, status: "upcoming" },
    { id: "3", title: "Live Jazz Night", date: "2024-11-10", attendees: 67, status: "completed" },
  ];

  const handleDelete = (id: string) => {
    toast({
      title: "Event Deleted",
      description: "Event has been removed successfully.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <CardTitle className="text-lg sm:text-xl">Events Management</CardTitle>
          <Button size="sm" className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-accent/50 transition-colors gap-3"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-sm sm:text-base">{event.title}</h3>
                    <Badge variant={event.status === "upcoming" ? "default" : "secondary"} className="text-xs">
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{event.date}</p>
                  <p className="text-xs sm:text-sm">{event.attendees} attendees</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                    <Edit className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(event.id)}
                    className="flex-1 sm:flex-none"
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventsManagement;
