import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, X, ShoppingCart, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCart } from "@/contexts/CartContext";
import menuHero from "@/assets/menu-hero.jpg";
import avocadoToast from "@/assets/menu/avocado-toast.jpg";
import classicBreakfast from "@/assets/menu/classic-breakfast.jpg";
import chickenSalad from "@/assets/menu/chicken-salad.jpg";
import jollofRice from "@/assets/menu/jollof-rice.jpg";
import latte from "@/assets/menu/latte.jpg";
import smoothie from "@/assets/menu/smoothie.jpg";
import chocolateCake from "@/assets/menu/chocolate-cake.jpg";
import fruitTart from "@/assets/menu/fruit-tart.jpg";
import bgVideo from "@/assets/burger.mp4";
import elegantBg from "@/assets/bg-img.png";
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addItem, totalItems } = useCart();
  const navigate = useNavigate();
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = ["all", "breakfast", "main-menu", "main-meals", "pasta", "sides", "drinks"];
  const dietaryOptions = ["vegetarian", "vegan", "gluten-free", "dairy-free"];

  const menuItems = [
    // Breakfast Menu
    {
      id: 1,
      name: "The Full Monty",
      description: "A hearty English breakfast with eggs, bacon, sausages, mushrooms, baked beans, toast, grilled tomatoes, and hash browns.",
      ingredients: ["Eggs", "Bacon", "Sausages", "Mushrooms", "Baked beans", "Toast", "Grilled tomatoes", "Hash browns"],
      price: "180.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 2,
      name: "Hero's Breakfast",
      description: "Stir-fried beef, 2 eggs, baked beans, and potato wedges for a robust culinary adventure.",
      ingredients: ["Stir-fried beef", "Eggs", "Baked beans", "Potato wedges"],
      price: "190.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 3,
      name: "The Big Plate",
      description: "Choose buttermilk pancakes, oatmeal pancakes, French toast paired with two eggs of your choice, breakfast potatoes, bacon and sausages",
      ingredients: ["Pancakes/French toast", "Eggs", "Breakfast potatoes", "Bacon", "Sausages"],
      price: "180.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 4,
      name: "Chicken & Waffles",
      description: "Our chicken and waffles are made with crispy chicken tenders that are perfectly seasoned and juicy, served on top of a warm and fluffy Elm made waffle",
      ingredients: ["Crispy chicken tenders", "Elm made waffle"],
      price: "180.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 5,
      name: "Breakfast Wrap - Eggs and Chicken Sausage",
      description: "Eggs and Chicken Sausage wrapped in a soft tortilla",
      ingredients: ["Eggs", "Chicken sausage", "Tortilla wrap"],
      price: "100.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 6,
      name: "Breakfast Wrap - Vegetables and Mushrooms",
      description: "Fresh vegetables and mushrooms wrapped in a soft tortilla",
      ingredients: ["Vegetables", "Mushrooms", "Tortilla wrap"],
      price: "100.00",
      category: "breakfast",
      dietary: ["vegetarian"],
      image: avocadoToast,
    },
    {
      id: 7,
      name: "Breakfast Wrap - Egg and Bacon",
      description: "Eggs and crispy bacon wrapped in a soft tortilla",
      ingredients: ["Eggs", "Bacon", "Tortilla wrap"],
      price: "100.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 8,
      name: "Tuna Melt",
      description: "Tuna with tomatoes, mozzarella cheese, grilled between fresh bread, served with fries.",
      ingredients: ["Tuna", "Tomatoes", "Mozzarella cheese", "Fresh bread", "French fries"],
      price: "120.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 9,
      name: "Chicken Melt",
      description: "Chicken with tomatoes, mozzarella cheese, grilled between fresh bread, served with fries.",
      ingredients: ["Chicken", "Tomatoes", "Mozzarella cheese", "Fresh bread", "French fries"],
      price: "120.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 10,
      name: "Avocado Toast",
      description: "Avocado mash / purée on sourdough toast with two eggs, cilantro, salt, and pepper",
      ingredients: ["Avocado", "Sourdough toast", "Eggs", "Cilantro", "Salt", "Pepper"],
      price: "150.00",
      category: "breakfast",
      dietary: ["vegetarian"],
      image: avocadoToast,
    },
    {
      id: 11,
      name: "Open Pancake Burger",
      description: "Chef made Beef patties, egg, bacon, chili flakes, and caramelized onion on a golden pancake",
      ingredients: ["Beef patties", "Egg", "Bacon", "Chili flakes", "Caramelized onion", "Pancake"],
      price: "190.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 12,
      name: "Club Sandwich",
      description: "A triple-decker delight with freshly sliced chicken breast, crispy bacon, juicy tomatoes, lettuce, and house special club sauce.",
      ingredients: ["Chicken breast", "Bacon", "Tomatoes", "Lettuce", "Club sauce"],
      price: "170.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 13,
      name: "BLT",
      description: "Crispy bacon, fresh lettuce, and ripe tomatoes between perfectly toasted bread for a simple yet satisfying sandwich.",
      ingredients: ["Bacon", "Lettuce", "Tomatoes", "Toasted bread"],
      price: "140.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    {
      id: 14,
      name: "Classic Chicken Sandwich",
      description: "Grilled chicken with fresh tomatoes, crisp lettuce, and a touch of chili mayo, served in a toasted baguette—a simple, satisfying classic.",
      ingredients: ["Grilled chicken", "Tomatoes", "Lettuce", "Chili mayo", "Baguette"],
      price: "160.00",
      category: "breakfast",
      dietary: [],
      image: classicBreakfast,
    },
    
    // Main Menu - Light Bites
    {
      id: 15,
      name: "Chicken Wings (6)",
      description: "Salt n Pepper, Honey Glazed or Barbecue",
      ingredients: ["Chicken wings", "Choice of seasoning"],
      price: "95.00",
      category: "main-menu",
      dietary: ["gluten-free"],
      image: chickenSalad,
    },
    {
      id: 16,
      name: "Spring Rolls",
      description: "Crispy spring rolls with fresh vegetables",
      ingredients: ["Spring roll wrapper", "Vegetables", "Dipping sauce"],
      price: "75.00",
      category: "main-menu",
      dietary: ["vegetarian"],
      image: avocadoToast,
    },
    {
      id: 17,
      name: "Fish Sticks",
      description: "Golden fried fish sticks served with tartar sauce",
      ingredients: ["Fish", "Breadcrumbs", "Tartar sauce"],
      price: "85.00",
      category: "main-menu",
      dietary: [],
      image: chickenSalad,
    },
    {
      id: 18,
      name: "Calamari",
      description: "Crispy fried calamari rings",
      ingredients: ["Squid", "Flour", "Spices", "Lemon"],
      price: "110.00",
      category: "main-menu",
      dietary: [],
      image: chickenSalad,
    },
    {
      id: 19,
      name: "Chicken Tenders",
      description: "Tender chicken strips fried to perfection",
      ingredients: ["Chicken breast", "Breadcrumbs", "Spices"],
      price: "85.00",
      category: "main-menu",
      dietary: [],
      image: chickenSalad,
    },
    
    // Main Menu - Salads
    {
      id: 20,
      name: "Deluxe Chicken & Bacon Salad",
      description: "Grilled chicken, crispy bacon, soft potatoes, sweet corn, carrots, lettuce, boiled eggs, and red onions come together for a hearty, satisfying salad.",
      ingredients: ["Grilled chicken", "Bacon", "Potatoes", "Sweet corn", "Carrots", "Lettuce", "Eggs", "Red onions"],
      price: "170.00",
      category: "main-menu",
      dietary: ["gluten-free"],
      image: chickenSalad,
    },
    {
      id: 21,
      name: "Creamy Potato Salad",
      description: "Tender potatoes tossed in a rich, creamy dressing with subtle seasoning—simple, comforting, and full of flavor.",
      ingredients: ["Potatoes", "Creamy dressing", "Seasoning"],
      price: "140.00",
      category: "main-menu",
      dietary: ["vegetarian", "gluten-free"],
      image: chickenSalad,
    },
    {
      id: 22,
      name: "Mediterranean-Inspired Chicken Salad",
      description: "Grilled chicken with a mix of crisp greens, roasted vegetables, potatoes, and a light Mediterranean style dressing—fresh and full of character.",
      ingredients: ["Grilled chicken", "Mixed greens", "Roasted vegetables", "Potatoes", "Mediterranean dressing"],
      price: "190.00",
      category: "main-menu",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    {
      id: 23,
      name: "Nicoise Salad",
      description: "A fresh and balanced mix of tuna, potatoes, boiled eggs, tomatoes, cucumbers, bell peppers, and capers—a classic, flavorful salad",
      ingredients: ["Tuna", "Potatoes", "Eggs", "Tomatoes", "Cucumbers", "Bell peppers", "Capers"],
      price: "170.00",
      category: "main-menu",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    
    // Main Menu - Burgers
    {
      id: 24,
      name: "Classic Beef Burger",
      description: "Melt-in-your-mouth organic beef patty on lettuce and tomato, with melted cheese, caramelized onions, and our secret burger sauce.",
      ingredients: ["Beef patty", "Lettuce", "Tomato", "Cheese", "Caramelized onions", "Burger sauce"],
      price: "170.00",
      category: "main-menu",
      dietary: [],
      image: chickenSalad,
    },
    {
      id: 25,
      name: "Chicken Schnitzel Burger",
      description: "Golden fried chicken schnitzel loaded with coleslaw and your choice of Sweet Chili, Honey Mustard, or Sriracha Mayo.",
      ingredients: ["Chicken schnitzel", "Coleslaw", "Choice of sauce"],
      price: "180.00",
      category: "main-menu",
      dietary: [],
      image: chickenSalad,
    },
    {
      id: 26,
      name: "Veggie Burger",
      description: "A sizzling stir-fry of mushrooms and seasonal vegetables in our signature sauce, served in a lightly toasted burger bun with fresh toppings.",
      ingredients: ["Mushrooms", "Seasonal vegetables", "Burger bun", "Fresh toppings"],
      price: "160.00",
      category: "main-menu",
      dietary: ["vegetarian"],
      image: avocadoToast,
    },
    
    // Main Meals
    {
      id: 27,
      name: "Grilled Chicken - 1/4 Chicken",
      description: "Indulge in perfectly grilled poultry, served with BBQ or Peri Peri Sauce.",
      ingredients: ["Quarter chicken", "BBQ or Peri Peri sauce", "Side of choice"],
      price: "160.00",
      category: "main-meals",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    {
      id: 28,
      name: "Grilled Chicken - 1/2 Chicken",
      description: "Indulge in perfectly grilled poultry, served with BBQ or Peri Peri Sauce.",
      ingredients: ["Half chicken", "BBQ or Peri Peri sauce", "Side of choice"],
      price: "230.00",
      category: "main-meals",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    {
      id: 29,
      name: "Grilled Chicken - Whole Chicken",
      description: "Indulge in perfectly grilled poultry, served with BBQ or Peri Peri Sauce.",
      ingredients: ["Whole chicken", "BBQ or Peri Peri sauce", "Two sides"],
      price: "400.00",
      category: "main-meals",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    {
      id: 30,
      name: "Chicken Schnitzel",
      description: "Delight in the classic appeal of our Chicken Schnitzel where tender chicken is breaded and fried to golden perfection. Choose your favorite side to accompany this crispy delight.",
      ingredients: ["Chicken breast", "Breadcrumbs", "Side of choice"],
      price: "170.00",
      category: "main-meals",
      dietary: [],
      image: chickenSalad,
    },
    {
      id: 31,
      name: "Pork Chops",
      description: "Dive into heartwarming comfort with pan-seared pork chops, skillfully seared to perfection and tossed in Salt n Pepper or BBQ sauce.",
      ingredients: ["Pork chops", "Salt n Pepper or BBQ sauce"],
      price: "260.00",
      category: "main-meals",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    {
      id: 32,
      name: "Salmon Fillet with Seasonal Veg",
      description: "Delight in the purity of flavors with pan-seared salmon, accentuated by a delicate sear and served with seasonal vegetables.",
      ingredients: ["Salmon fillet", "Seasonal vegetables"],
      price: "350.00",
      category: "main-meals",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    {
      id: 33,
      name: "Grouper Perfection with Seasonal Vegetables",
      description: "Seared Grouper Fish with vibrant, locally sourced vegetables for a truly exceptional dish.",
      ingredients: ["Grouper fish", "Seasonal vegetables"],
      price: "300.00",
      category: "main-meals",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    {
      id: 34,
      name: "Stir-fried Beef Fillet (250g)",
      description: "Savor our expertly seasoned beef fillet stir-fried to perfection with fresh vegetables and served with your choice of side.",
      ingredients: ["Beef fillet", "Fresh vegetables", "Side of choice"],
      price: "280.00",
      category: "main-meals",
      dietary: ["gluten-free", "dairy-free"],
      image: chickenSalad,
    },
    
    // Pasta
    {
      id: 35,
      name: "Cajun Creme Penne with Chicken",
      description: "Elevate your dining experience with the bold spices of Cajun cuisine and the creaminess of a perfectly balanced sauce.",
      ingredients: ["Penne pasta", "Chicken", "Cajun cream sauce"],
      price: "190.00",
      category: "pasta",
      dietary: [],
      image: chickenSalad,
    },
    {
      id: 36,
      name: "Cajun Creme Penne with Shrimp",
      description: "Elevate your dining experience with the bold spices of Cajun cuisine and the creaminess of a perfectly balanced sauce.",
      ingredients: ["Penne pasta", "Shrimp", "Cajun cream sauce"],
      price: "250.00",
      category: "pasta",
      dietary: [],
      image: chickenSalad,
    },
    {
      id: 37,
      name: "Spaghetti Arrabiata with Chicken",
      description: "Chicken Arrabiata blends succulent chicken with the vibrant heat of homemade arrabbiata sauce.",
      ingredients: ["Spaghetti", "Chicken", "Arrabbiata sauce"],
      price: "190.00",
      category: "pasta",
      dietary: ["dairy-free"],
      image: chickenSalad,
    },
    {
      id: 38,
      name: "Spaghetti Arrabiata with Shrimp",
      description: "Shrimp Arrabiata blends succulent shrimp with the vibrant heat of homemade arrabbiata sauce.",
      ingredients: ["Spaghetti", "Shrimp", "Arrabbiata sauce"],
      price: "250.00",
      category: "pasta",
      dietary: ["dairy-free"],
      image: chickenSalad,
    },
    {
      id: 39,
      name: "Spaghetti Bolognese",
      description: "Indulge in the heartwarming essence of Italy with perfectly cooked spaghetti entwined with a luscious meat sauce.",
      ingredients: ["Spaghetti", "Bolognese sauce", "Ground beef"],
      price: "180.00",
      category: "pasta",
      dietary: ["dairy-free"],
      image: chickenSalad,
    },
    
    // Sides
    {
      id: 40,
      name: "Jollof Rice",
      description: "Traditional Ghanaian jollof rice",
      ingredients: ["Rice", "Tomatoes", "Spices"],
      price: "60.00",
      category: "sides",
      dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
      image: jollofRice,
    },
    {
      id: 41,
      name: "Sauteed Potato",
      description: "Golden sauteed potatoes",
      ingredients: ["Potatoes", "Herbs", "Butter"],
      price: "60.00",
      category: "sides",
      dietary: ["vegetarian", "gluten-free"],
      image: jollofRice,
    },
    {
      id: 42,
      name: "Mashed Potato",
      description: "Creamy mashed potatoes",
      ingredients: ["Potatoes", "Butter", "Cream"],
      price: "60.00",
      category: "sides",
      dietary: ["vegetarian", "gluten-free"],
      image: jollofRice,
    },
    {
      id: 43,
      name: "Fried Rice",
      description: "Savory fried rice with vegetables",
      ingredients: ["Rice", "Vegetables", "Soy sauce"],
      price: "60.00",
      category: "sides",
      dietary: ["vegetarian", "dairy-free"],
      image: jollofRice,
    },
    {
      id: 44,
      name: "French Fries",
      description: "Crispy golden french fries",
      ingredients: ["Potatoes", "Salt"],
      price: "60.00",
      category: "sides",
      dietary: ["vegetarian", "vegan", "gluten-free", "dairy-free"],
      image: jollofRice,
    },
    
    // Drinks Menu
    {
      id: 45,
      name: "Plant Based Milk",
      description: "Add plant-based milk to any beverage",
      ingredients: ["Plant-based milk"],
      price: "20.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 46,
      name: "Espresso Single",
      description: "Single shot of espresso",
      ingredients: ["Espresso"],
      price: "35.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 47,
      name: "Espresso Double",
      description: "Double shot of espresso",
      ingredients: ["Espresso"],
      price: "45.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 48,
      name: "Americano",
      description: "Espresso with hot water",
      ingredients: ["Espresso", "Hot water"],
      price: "40.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 49,
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      ingredients: ["Espresso", "Steamed milk", "Foam"],
      price: "55.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 50,
      name: "Coffee Latte",
      description: "Smooth espresso with steamed milk",
      ingredients: ["Espresso", "Steamed milk"],
      price: "60.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 51,
      name: "Flat White",
      description: "Espresso with microfoam milk",
      ingredients: ["Espresso", "Microfoam milk"],
      price: "50.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 52,
      name: "Caffe Macchiato",
      description: "Espresso with a dollop of foam",
      ingredients: ["Espresso", "Foam"],
      price: "50.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 53,
      name: "Coffee Mocha",
      description: "Espresso with chocolate and steamed milk",
      ingredients: ["Espresso", "Chocolate", "Steamed milk"],
      price: "60.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 54,
      name: "Hot Chocolate",
      description: "Rich hot chocolate",
      ingredients: ["Chocolate", "Steamed milk"],
      price: "50.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 55,
      name: "Black Tea - Cup",
      description: "Black, Green or Ginger tea",
      ingredients: ["Tea"],
      price: "35.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 56,
      name: "Black Tea - Pot",
      description: "Black, Green or Ginger tea",
      ingredients: ["Tea"],
      price: "55.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 57,
      name: "Iced Latte",
      description: "Cold latte over ice",
      ingredients: ["Espresso", "Cold milk", "Ice"],
      price: "60.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 58,
      name: "Iced Mocha",
      description: "Cold mocha over ice",
      ingredients: ["Espresso", "Chocolate", "Cold milk", "Ice"],
      price: "60.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 59,
      name: "Frappuccino",
      description: "Blended iced coffee drink",
      ingredients: ["Espresso", "Milk", "Ice", "Sweetener"],
      price: "70.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: smoothie,
    },
    {
      id: 60,
      name: "Cold Chocolate",
      description: "Iced chocolate drink",
      ingredients: ["Chocolate", "Cold milk", "Ice"],
      price: "50.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: latte,
    },
    {
      id: 61,
      name: "Pineapple Juice",
      description: "Fresh pineapple juice",
      ingredients: ["Fresh pineapple"],
      price: "40.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 62,
      name: "Pine-ginger Juice",
      description: "Fresh pineapple and ginger juice",
      ingredients: ["Fresh pineapple", "Ginger"],
      price: "40.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 63,
      name: "Watermelon Juice",
      description: "Fresh watermelon juice",
      ingredients: ["Fresh watermelon"],
      price: "40.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 64,
      name: "Passion Fruit Juice",
      description: "Refreshing passion fruit juice",
      ingredients: ["Passion fruit"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 65,
      name: "Orange Juice",
      description: "Fresh orange juice",
      ingredients: ["Fresh oranges"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 66,
      name: "Mango Juice",
      description: "Sweet mango juice",
      ingredients: ["Fresh mango"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 67,
      name: "Sobolo (Mint / Ginger)",
      description: "Traditional hibiscus drink with mint or ginger",
      ingredients: ["Hibiscus", "Mint or Ginger"],
      price: "40.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 68,
      name: "Coca Cola Regular",
      description: "Classic Coca Cola",
      ingredients: ["Coca Cola"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 69,
      name: "Coca Cola Zero",
      description: "Zero sugar Coca Cola",
      ingredients: ["Coca Cola Zero"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 70,
      name: "Fanta",
      description: "Orange flavored soda",
      ingredients: ["Fanta"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 71,
      name: "Sprite",
      description: "Lemon-lime soda",
      ingredients: ["Sprite"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 72,
      name: "Red Bull",
      description: "Energy drink",
      ingredients: ["Red Bull"],
      price: "50.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 73,
      name: "Still Water",
      description: "Bottled still water",
      ingredients: ["Water"],
      price: "10.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 74,
      name: "Sparkling Water",
      description: "Bottled sparkling water",
      ingredients: ["Sparkling water"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: latte,
    },
    {
      id: 75,
      name: "Mango Boost Smoothie",
      description: "Mango, apple, banana and chai seeds",
      ingredients: ["Mango", "Apple", "Banana", "Chai seeds"],
      price: "75.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 76,
      name: "Melon Mania Smoothie",
      description: "Watermelon, apple, grapes and pineapple",
      ingredients: ["Watermelon", "Apple", "Grapes", "Pineapple"],
      price: "75.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 77,
      name: "Granola Mix Smoothie",
      description: "Oatmeal, banana, pineapple, and blueberry",
      ingredients: ["Oatmeal", "Banana", "Pineapple", "Blueberry"],
      price: "75.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 78,
      name: "Tropical Flavors Smoothie",
      description: "Coconut, pineapple, and banana",
      ingredients: ["Coconut", "Pineapple", "Banana"],
      price: "75.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 79,
      name: "Green Juice Smoothie",
      description: "Spinach, cucumber, kiwi, and pineapple",
      ingredients: ["Spinach", "Cucumber", "Kiwi", "Pineapple"],
      price: "75.00",
      category: "drinks",
      dietary: ["vegan", "dairy-free"],
      image: smoothie,
    },
    {
      id: 80,
      name: "Smoothie Bowl",
      description: "Turn any smoothie into a bowl with two toppings",
      ingredients: ["Choice of smoothie", "Two toppings"],
      price: "100.00",
      category: "drinks",
      dietary: ["vegetarian"],
      image: smoothie,
    },
    {
      id: 81,
      name: "Budweiser",
      description: "Premium lager beer",
      ingredients: ["Beer"],
      price: "50.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 82,
      name: "Heineken",
      description: "Premium lager beer",
      ingredients: ["Beer"],
      price: "50.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 83,
      name: "Guinness",
      description: "Stout beer",
      ingredients: ["Beer"],
      price: "30.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 84,
      name: "Espresso Martini",
      description: "Cafe liqueurs, sugar cane syrup, coffee espresso, vodka",
      ingredients: ["Cafe liqueurs", "Sugar cane syrup", "Espresso", "Vodka"],
      price: "100.00",
      category: "drinks",
      dietary: [],
      image: latte,
    },
    {
      id: 85,
      name: "Classic Mojito",
      description: "Mint leave, lime wedges, lemon juice, simple syrup, white rum, soda water",
      ingredients: ["Mint", "Lime", "Lemon juice", "Simple syrup", "Rum", "Soda water"],
      price: "100.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 86,
      name: "Margarita",
      description: "Lemon juice, triple sec, tequila",
      ingredients: ["Lemon juice", "Triple sec", "Tequila"],
      price: "110.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 87,
      name: "House Prosecco - Glass",
      description: "Sparkling wine",
      ingredients: ["Prosecco"],
      price: "90.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 88,
      name: "House Prosecco - Bottle",
      description: "Sparkling wine",
      ingredients: ["Prosecco"],
      price: "500.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 89,
      name: "House Red Wine - Glass",
      description: "Cabernet Sauvignon / Merlot",
      ingredients: ["Red wine"],
      price: "85.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 90,
      name: "House Red Wine - Bottle",
      description: "Cabernet Sauvignon / Merlot",
      ingredients: ["Red wine"],
      price: "320.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 91,
      name: "House White Wine - Glass",
      description: "Sauvignon Blanc / Chardonnay",
      ingredients: ["White wine"],
      price: "85.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
    {
      id: 92,
      name: "House White Wine - Bottle",
      description: "Sauvignon Blanc / Chardonnay",
      ingredients: ["White wine"],
      price: "320.00",
      category: "drinks",
      dietary: ["vegan"],
      image: latte,
    },
  ];

  const toggleDietary = (option: string) => {
    setSelectedDietary((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const getCategoryDisplayName = (category: string) => {
    const categoryNames: { [key: string]: string } = {
      all: "All",
      breakfast: "Breakfast Menu",
      "main-menu": "Main Menu",
      "main-meals": "Main Meals",
      pasta: "Pasta (Spaghetti / Penne)",
      sides: "Sides",
      drinks: "Drinks Menu",
    };
    return categoryNames[category] || category;
  };

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    const dietaryMatch =
      selectedDietary.length === 0 || selectedDietary.every((diet) => item.dietary.includes(diet));
    return categoryMatch && dietaryMatch;
  });

  const handleDownloadMenu = () => {
    alert("PDF download functionality will be implemented. The menu will be generated as a downloadable PDF.");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}
      />
      <Navigation />

      {/* Floating Cart Button */}
      {totalItems > 0 && (
        <Button
          onClick={() => navigate('/cart')}
          className="fixed bottom-20 right-5 z-50 h-16 w-16 rounded-full shadow-lg animate-scale-in"
          size="icon"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center font-bold">
            {totalItems}
          </span>
        </Button>
      )}

      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden mt-16">
         <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src={bgVideo} type="video/mp4" />
                </video>
        {/* <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `url(${menuHero})`,
          }}
        > */}
          <div className="absolute inset-0 bg-primary/20" />
        {/* </div> */}

        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">Our Menu</h1>
          <p className="text-xl text-primary-foreground/90 mb-6">Crafted with love, served with care</p>
          <Button
            onClick={handleDownloadMenu}
            variant="outline"
            className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground hover:bg-background/20 hover:scale-105 transition-all duration-300"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Full Menu (PDF)
          </Button>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-secondary text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                  : "hover:scale-105 transition-all duration-300 text-primary-foreground"
              }
            >
              {getCategoryDisplayName(category)}
            </Button>
          ))}
        </div>

        {/* Dietary Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-primary-foreground self-center">Filter by:</span>
          {dietaryOptions.map((option) => (
            <Badge
              key={option}
              variant={selectedDietary.includes(option) ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-300 ${
                selectedDietary.includes(option)
                  ? "bg-secondary text-primary-foreground hover:bg-accent/90"
                  : "hover:scale-110 text-primary-foreground"
              }`}
              onClick={() => toggleDietary(option)}
            >
              {option}
            </Badge>
          ))}
          {selectedDietary.length > 0 && (
            <Badge
              variant="outline"
              className="cursor-pointer text-primary-foreground hover:bg-destructive hover:text-destructive-foreground transition-all duration-300"
              onClick={() => setSelectedDietary([])}
            >
              <X className="h-3 w-3 mr-1 text-primary-foreground" />
              Clear
            </Badge>
          )}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fly-in-right overflow-hidden group opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-secondary">GHS {item.price}</span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                {/* Badge area with fixed height for uniform alignment */}
                <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
                  {item.dietary.length > 0 ? (
                    item.dietary.map((tag) => (
                      <Badge key={tag} variant="default" className="text-xs">
                        {tag}
                      </Badge>
                    ))
                  ) : (
                    <div className="h-[28px]" />
                  )}
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    addItem({
                      id: item.id.toString(),
                      name: item.name,
                      price: parseFloat(item.price),
                      category: getCategoryDisplayName(item.category),
                      description: item.description
                    });
                  }}
                  size="sm"
                  className="w-full gap-2 bg-background hover:"
                >
                  <Plus className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              No items match your filters. Try adjusting your selection.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">Ready to order?</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300">
            Order Online
          </Button>
        </div>
      </section>

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl animate-scale-in bg-cover bg-center bg-no-repeat rounded-xl bg-background/90 opacity-2"
        style={{
           backgroundImage: `url(${elegantBg})`,
        }}
        
        >
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary-foreground">{selectedItem?.name}</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary-foreground">GHS {selectedItem.price}</span>
                {selectedItem.dietary.length > 0 && (
                  <div className="flex gap-2">
                    {selectedItem.dietary.map((tag: string) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-primary-foreground">{selectedItem.description}</p>
              <div>
                <h4 className="font-semibold mb-2 text-primary-foreground">Ingredients:</h4>
                <ul className="list-disc list-inside text-primary-foreground space-y-1">
                  {selectedItem.ingredients.map((ingredient: string, idx: number) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <Button className="w-full bg-secondary hover:bg-accent/90 text-accent-foreground">
                Add to Order
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <AIChatbot />
      <WhatsAppButton />
    </div>
  );
};

export default Menu;
