import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const FavoritesTab = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem } = useCart();

  // Mock data - replace with actual data when backend is connected
  const favorites = [
    {
      id: "1",
      name: "Classic Breakfast",
      description: "Eggs, bacon, sausage, toast, baked beans",
      price: 140,
      image: "/assets/menu/classic-breakfast.jpg",
      category: "Breakfast",
    },
    {
      id: "2",
      name: "Jollof Rice",
      description: "Spicy West African rice with chicken",
      price: 180,
      image: "/assets/menu/jollof-rice.jpg",
      category: "Main Meals",
    },
    {
      id: "3",
      name: "Avocado Toast",
      description: "Smashed avocado on sourdough bread",
      price: 95,
      image: "/assets/menu/avocado-toast.jpg",
      category: "Breakfast",
    },
  ];

  const handleRemove = (id: string) => {
    // TODO: Remove from favorites in backend
    toast({
      title: "Removed from Favorites",
      description: "Item has been removed from your favorites.",
    });
  };

  const handleAddToCart = (item: typeof favorites[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      description: item.description,
    });
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 fill-current" />
            My Favorites
          </CardTitle>
          <Button size="sm" onClick={() => navigate("/menu")}>
            <Plus className="h-4 w-4 mr-2" />
            Add More
          </Button>
        </CardHeader>
        <CardContent>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-muted relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <p className="text-sm text-primary mt-1">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">GHS {item.price}</span>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(item)}
                        className="gap-1"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Heart className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">No favorites yet</p>
              <p className="text-sm mb-4">Start adding your favorite dishes!</p>
              <Button onClick={() => navigate("/menu")}>
                Browse Menu
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FavoritesTab;
