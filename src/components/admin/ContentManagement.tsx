import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContentManagement = () => {
  const { toast } = useToast();

  // Mock data
  const blogPosts = [
    { id: "1", title: "New Summer Menu Launch", date: "2024-11-01", status: "published" },
    { id: "2", title: "Chef's Interview", date: "2024-10-28", status: "draft" },
  ];

  const promotions = [
    { id: "1", title: "Happy Hour Special", discount: "20%", validUntil: "2024-12-31", status: "active" },
    { id: "2", title: "Weekend Brunch Deal", discount: "15%", validUntil: "2024-11-30", status: "active" },
  ];

  const handleDelete = (type: string, id: string) => {
    toast({
      title: "Deleted",
      description: `${type} has been removed successfully.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Tabs defaultValue="blog" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3">
          <TabsTrigger value="blog" className="text-xs sm:text-sm text-primary data-[state=active]:text-primary-foreground">Blog Posts</TabsTrigger>
          <TabsTrigger value="promotions" className="text-xs sm:text-sm text-primary data-[state=active]:text-primary-foreground">Promotions</TabsTrigger>
          <TabsTrigger value="gallery" className="text-xs sm:text-sm text-primary data-[state=active]:text-primary-foreground">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="blog" className="mt-4">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-lg sm:text-xl">Blog Posts</CardTitle>
              <Button size="sm" className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-accent/50 transition-colors gap-3"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm sm:text-base mb-1">{post.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{post.date} • {post.status}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                        <Edit className="h-4 w-4 sm:mr-2" />
                        <span className="hidden sm:inline">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete("Blog post", post.id)}
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
        </TabsContent>

        <TabsContent value="promotions" className="mt-4">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-lg sm:text-xl">Promotions</CardTitle>
              <Button size="sm" className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                New Promotion
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {promotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-accent/50 transition-colors gap-3"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm sm:text-base mb-1">{promo.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {promo.discount} off • Valid until {promo.validUntil}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                        <Edit className="h-4 w-4 sm:mr-2" />
                        <span className="hidden sm:inline">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete("Promotion", promo.id)}
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
        </TabsContent>

        <TabsContent value="gallery" className="mt-4">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-lg sm:text-xl">Gallery Images</CardTitle>
              <Button size="sm" className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Upload Image
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Upload and manage restaurant photos for the gallery page.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;
