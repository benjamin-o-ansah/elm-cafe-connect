import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Store, CreditCard, Wallet, Banknote } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import elegantBg from "@/assets/bg-img.png";

type OrderType = "delivery" | "pickup" | "room-service";
type PaymentMethod = "stripe" | "mobile-money" | "cash";
const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("stripe");
  const [mobileNetwork, setMobileNetwork] = useState<string>('mtn-momo'); // New state for MoMo selection
  const [isSubmitting, setIsSubmitting] = useState(false);

  // LOGIC: Updated deliveryFee calculation
  const deliveryFee = 
    orderType === "delivery" ? 20 : // External delivery fee
    orderType === "room-service" ? 10 : // Room service/Apartment delivery fee
    0; // Pickup is free
    
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if user is logged in (placeholder - will be replaced with actual auth)
    const isLoggedIn = false; 

    if (!isLoggedIn) {
      toast({
        title: "Sign in required",
        description: "Please sign in to complete your order",
      });
      navigate("/signin?redirect=/checkout");
      return;
    }

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "You will receive a confirmation shortly",
      });
      clearCart();
      navigate("/order-tracking/mock-order-id");
      setIsSubmitting(false);
    }, 1500);
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

//   return (
//     <div className="min-h-screen bg-background">
//        <div
//                 className="fixed inset-0 opacity-5 pointer-events-none"
//                 style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}
//               />
//       <Navigation />
//       <main className="container mx-auto px-4 py-24 grid grid-cols-2">
//         <div className=" mx-auto">
//           <Button variant="ghost" onClick={() => navigate("/cart")} className="mb-6 text-muted">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Cart
//           </Button>

//           <h1 className="text-4xl font-bold mb-8 text-muted">Checkout</h1>

//           <form onSubmit={handleSubmit}>
//             <div className="grid gap-8">
//               <div className=" space-y-6">
//                 {/* Order Type */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Order Type</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <RadioGroup value={orderType} onValueChange={(value: any) => setOrderType(value)}>
//                       <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-background hover:text-muted">
//                         <RadioGroupItem value="delivery" id="delivery" />
//                         <Label htmlFor="delivery" className="flex items-center cursor-pointer flex-1 hover:text-muted">
//                           <MapPin className="mr-2 h-5 w-5" />
//                           <div>
//                             <p className="font-medium">Delivery</p>
//                             <p className="text-sm text-muted-foreground hover:text-muted">Delivered to your location (GHS 20.00)</p>
//                           </div>
//                         </Label>
//                       </div>
//                       <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-background hover:text-muted">
//                         <RadioGroupItem value="pickup" id="pickup" />
//                         <Label htmlFor="pickup" className="flex items-center cursor-pointer flex-1">
//                           <Store className="mr-2 h-5 w-5" />
//                           <div>
//                             <p className="font-medium">In-Store Pickup</p>
//                             <p className="text-sm text-muted-foreground hover:text-muted">Collect from restaurant (Free)</p>
//                           </div>
//                         </Label>
//                       </div>
//                     </RadioGroup>
//                   </CardContent>
//                 </Card>

//                 {/* Delivery Details */}
//                 {orderType === "delivery" && (
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Delivery Address</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="address">Street Address</Label>
//                         <Input
//                           id="address"
//                           placeholder="Enter your delivery address"
//                           className="placeholder:text-primary-foreground text-muted"
//                           required
//                         />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="city">City</Label>
//                           <Input id="city" placeholder="Accra" required className="placeholder:text-primary-foreground text-muted"/>
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="phone">Phone Number</Label>
//                           <Input
//                             id="phone"
//                             type="tel"
//                             placeholder="+233..."
//                             required
//                             className="placeholder:text-primary-foreground text-muted"
//                           />
//                         </div>
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
//                         <Textarea
//                           className="placeholder:text-primary-foreground text-muted"
//                           id="instructions"
//                           placeholder="Add any special instructions for delivery..."
//                           rows={3}
//                         />
//                       </div>
//                       <Button type="button" variant="outline" className="w-full">
//                         <MapPin className="mr-2 h-4 w-4" />
//                         Select Location on Map
//                       </Button>
//                       <p className="text-sm text-muted-foreground">Map integration will be available soon</p>
//                     </CardContent>
//                   </Card>
//                 )}

//                 {/* Contact Information */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-primary">Contact Information</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="firstName">First Name</Label>
//                         <Input
//                           id="firstName"
//                           required
//                           placeholder="first name"
//                           className="placeholder:text-muted text-sm text-muted"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="lastName">Last Name</Label>
//                         <Input
//                           id="lastName"
//                           required
//                           placeholder="last name"
//                           className="placeholder:text-primary-foreground text-sm text-muted"
//                         />
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="email"
//                         required
//                         className="placeholder:text-primary-foreground text-muted text-sm "
//                       />
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Payment Method */}
//                 <Card>
//   <CardHeader>
//     <CardTitle>Payment Method</CardTitle>
//   </CardHeader>

//   <CardContent>
//     <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
      
//       {/* STRIPE */}
//       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//         <RadioGroupItem value="stripe" id="stripe" />

//         <Label
//           htmlFor="stripe"
//           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//         >
//           <CreditCard className="mr-2 h-5 w-5 group-hover:text-muted" />
//           <div>
//             <p className="font-medium group-hover:text-muted">Credit/Debit Card</p>
//             <p className="text-sm text-muted-foreground group-hover:text-muted">Pay securely with Stripe</p>
//           </div>
//         </Label>
//       </div>

//       {/* MOBILE MONEY */}
//       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//         <RadioGroupItem value="mobile-money" id="mobile-money" />

//         <Label
//           htmlFor="mobile-money"
//           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//         >
//           <Wallet className="mr-2 h-5 w-5 group-hover:text-muted" />
//           <div>
//             <p className="font-medium group-hover:text-muted">Mobile Money</p>
//             <p className="text-sm text-muted-foreground group-hover:text-muted">MTN, Vodafone, AirtelTigo</p>
//           </div>
//         </Label>
//       </div>

//       {/* CASH */}
//       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//         <RadioGroupItem value="cash" id="cash" />

//         <Label
//           htmlFor="cash"
//           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//         >
//           <Banknote className="mr-2 h-5 w-5 group-hover:text-muted" />
//           <div>
//             <p className="font-medium group-hover:text-muted">Cash on Delivery</p>
//             <p className="text-sm text-muted-foreground group-hover:text-muted">Pay when order arrives</p>
//           </div>
//         </Label>
//       </div>
//     </RadioGroup>
//   </CardContent>
// </Card>

//               </div>

            
//             </div>
//           </form>
//         </div>
//           {/* Order Summary */}
//               <div className="">
//                 <Card className="sticky top-24">
//                   <CardHeader>
//                     <CardTitle>Order Summary</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-3 space-x-3">
//                       {items.map((item) => (
//                         <div key={item.id} className="flex justify-between text-sm">
//                           <span className="text-muted-foreground">
//                             {item.name} x{item.quantity}
//                           </span>
//                           <span>GHS {(item.price * item.quantity).toFixed(2)}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <Separator className="my-4" />

//                     <div className="space-y-2">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-muted-foreground">Subtotal</span>
//                         <span>GHS {totalPrice.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-muted-foreground">Delivery Fee</span>
//                         <span>GHS {deliveryFee.toFixed(2)}</span>
//                       </div>
//                     </div>

//                     <Separator className="my-4" />

//                     <div className="flex justify-between text-lg font-bold">
//                       <span>Total</span>
//                       <span>GHS {finalTotal.toFixed(2)}</span>
//                     </div>

//                     <Button type="submit" className="w-full mt-6 bg-background" size="lg" disabled={isSubmitting}>
//                       {isSubmitting ? "Processing..." : "Place Order"}
//                     </Button>

//                     <p className="text-xs text-muted-foreground text-center mt-4">
//                       By placing your order, you agree to our terms and conditions
//                     </p>
//                   </CardContent>
//                 </Card>
//               </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Checkout;

// return (
//     <div className="min-h-screen bg-background">
//       <div
//         className="fixed inset-0 opacity-5 pointer-events-none"
//         style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}
//       />
//       <Navigation />
      
//       {/* 👇 FIX 1: Add a responsive grid with a gap */}
//       <main className="container mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        
//         {/* LEFT COLUMN: Contents Under Checkout */}
//         {/* 👇 FIX 2: Remove the extraneous " mx-auto" class */}
//         <div>
//           <Button variant="ghost" onClick={() => navigate("/cart")} className="mb-6 text-muted">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Cart
//           </Button>

//           <h1 className="text-4xl font-bold mb-8 text-muted">Checkout</h1>

//           <form onSubmit={handleSubmit}>
//             <div className="grid gap-8">
//               <div className=" space-y-6">
                
//                 {/* Order Type */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Order Type</CardTitle>
//                   </CardHeader>
//                   {/* ... (rest of Order Type Card Content) ... */}
//                   <CardContent>
//                     <RadioGroup value={orderType} onValueChange={(value: any) => setOrderType(value)}>
//                       <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-background hover:text-muted">
//                         <RadioGroupItem value="delivery" id="delivery" />
//                         <Label htmlFor="delivery" className="flex items-center cursor-pointer flex-1 hover:text-muted">
//                           <MapPin className="mr-2 h-5 w-5" />
//                           <div>
//                             <p className="font-medium">Delivery</p>
//                             <p className="text-sm text-muted-foreground hover:text-muted">Delivered to your location (GHS 20.00)</p>
//                           </div>
//                         </Label>
//                       </div>
//                       <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-background hover:text-muted">
//                         <RadioGroupItem value="pickup" id="pickup" />
//                         <Label htmlFor="pickup" className="flex items-center cursor-pointer flex-1">
//                           <Store className="mr-2 h-5 w-5" />
//                           <div>
//                             <p className="font-medium">In-Store Pickup</p>
//                             <p className="text-sm text-muted-foreground hover:text-muted">Collect from restaurant (Free)</p>
//                           </div>
//                         </Label>
//                       </div>
//                     </RadioGroup>
//                   </CardContent>
//                 </Card>

//                 {/* Delivery Details */}
//                 {orderType === "delivery" && (
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Delivery Address</CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="address">Street Address</Label>
//                         <Input
//                           id="address"
//                           placeholder="Enter your delivery address"
//                           className="placeholder:text-primary-foreground text-muted"
//                           required
//                         />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="city">City</Label>
//                           <Input id="city" placeholder="Accra" required className="placeholder:text-primary-foreground text-muted"/>
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="phone">Phone Number</Label>
//                           <Input
//                             id="phone"
//                             type="tel"
//                             placeholder="+233..."
//                             required
//                             className="placeholder:text-primary-foreground text-muted"
//                           />
//                         </div>
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
//                         <Textarea
//                           className="placeholder:text-primary-foreground text-muted"
//                           id="instructions"
//                           placeholder="Add any special instructions for delivery..."
//                           rows={3}
//                         />
//                       </div>
//                       <Button type="button" variant="outline" className="w-full">
//                         <MapPin className="mr-2 h-4 w-4" />
//                         Select Location on Map
//                       </Button>
//                       <p className="text-sm text-muted-foreground">Map integration will be available soon</p>
//                     </CardContent>
//                   </Card>
//                 )}

//                 {/* Contact Information */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-primary">Contact Information</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="firstName">First Name</Label>
//                         <Input
//                           id="firstName"
//                           required
//                           placeholder="first name"
//                           className="placeholder:text-muted text-sm text-muted"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="lastName">Last Name</Label>
//                         <Input
//                           id="lastName"
//                           required
//                           placeholder="last name"
//                           className="placeholder:text-primary-foreground text-sm text-muted"
//                         />
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="email"
//                         required
//                         className="placeholder:text-primary-foreground text-muted text-sm "
//                       />
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Payment Method */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Payment Method</CardTitle>
//                   </CardHeader>

//                   <CardContent>
//                     <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
                      
//                       {/* STRIPE */}
//                       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//                         <RadioGroupItem value="stripe" id="stripe" />

//                         <Label
//                           htmlFor="stripe"
//                           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//                         >
//                           <CreditCard className="mr-2 h-5 w-5 group-hover:text-muted" />
//                           <div>
//                             <p className="font-medium group-hover:text-muted">Credit/Debit Card</p>
//                             <p className="text-sm text-muted-foreground group-hover:text-muted">Pay securely with Stripe</p>
//                           </div>
//                         </Label>
//                       </div>

//                       {/* MOBILE MONEY */}
//                       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//                         <RadioGroupItem value="mobile-money" id="mobile-money" />

//                         <Label
//                           htmlFor="mobile-money"
//                           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//                         >
//                           <Wallet className="mr-2 h-5 w-5 group-hover:text-muted" />
//                           <div>
//                             <p className="font-medium group-hover:text-muted">Mobile Money</p>
//                             <p className="text-sm text-muted-foreground group-hover:text-muted">MTN, Vodafone, AirtelTigo</p>
//                           </div>
//                         </Label>
//                       </div>

//                       {/* CASH */}
//                       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//                         <RadioGroupItem value="cash" id="cash" />

//                         <Label
//                           htmlFor="cash"
//                           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//                         >
//                           <Banknote className="mr-2 h-5 w-5 group-hover:text-muted" />
//                           <div>
//                             <p className="font-medium group-hover:text-muted">Cash on Delivery</p>
//                             <p className="text-sm text-muted-foreground group-hover:text-muted">Pay when order arrives</p>
//                           </div>
//                         </Label>
//                       </div>
//                     </RadioGroup>
//                   </CardContent>
//                 </Card>

//               </div>

            
//             </div>
//           </form>
//         </div>
        
//         {/* RIGHT COLUMN: Order Summary */}
//         {/* 👇 This div is a direct grid child and will take 50% width */}
//         <div className="md:pt-40">
//           <Card className="sticky top-24">
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3 space-x-3">
//                 {items.map((item) => (
//                   <div key={item.id} className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">
//                       {item.name} x{item.quantity}
//                     </span>
//                     <span>GHS {(item.price * item.quantity).toFixed(2)}</span>
//                   </div>
//                 ))}
//               </div>

//               <Separator className="my-4" />

//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Subtotal</span>
//                   <span>GHS {totalPrice.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Delivery Fee</span>
//                   <span>GHS {deliveryFee.toFixed(2)}</span>
//                 </div>
//               </div>

//               <Separator className="my-4" />

//               <div className="flex justify-between text-lg font-bold">
//                 <span>Total</span>
//                 <span>GHS {finalTotal.toFixed(2)}</span>
//               </div>

//               <Button type="submit" className="w-full mt-6 bg-background" size="lg" disabled={isSubmitting}>
//                 {isSubmitting ? "Processing..." : "Place Order"}
//               </Button>

//               <p className="text-xs text-muted-foreground text-center mt-4">
//                 By placing your order, you agree to our terms and conditions
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Checkout;

// return (
//     <div className="min-h-screen bg-background">
//       <div
//         className="fixed inset-0 opacity-5 pointer-events-none"
//         style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}
//       />
//       <Navigation />
      
//       {/* 🛠️ LAYOUT FIX: grid-cols-1 md:grid-cols-2 ensures 50/50 split on desktop */}
//       <main className="container mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        
//         {/* LEFT COLUMN: Contents Under Checkout (Takes 50% width) */}
//         <div>
//           <Button variant="ghost" onClick={() => navigate("/cart")} className="mb-6 text-muted">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Cart
//           </Button>

//           <h1 className="text-4xl font-bold mb-8 text-muted">Checkout</h1>

//           <form onSubmit={handleSubmit}>
//             <div className="grid gap-8">
//               <div className=" space-y-6">
                
//                 {/* Order Type */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Order Type</CardTitle>
//                   </CardHeader>
                  
//                   <CardContent>
//                     <RadioGroup value={orderType} onValueChange={(value: OrderType) => setOrderType(value)}>
                      
//                       {/* 1. EXTERNAL DELIVERY */}
//                       <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-secondary hover:text-muted">
//                         <RadioGroupItem value="delivery" id="delivery" />
//                         <Label htmlFor="delivery" className="flex items-center cursor-pointer flex-1 hover:text-muted">
//                           <MapPin className="mr-2 h-5 w-5" />
//                           <div>
//                             <p className="font-medium">External Delivery</p>
//                             <p className="text-sm text-muted-foreground hover:text-muted">Delivered to your external location (GHS 20.00)</p>
//                           </div>
//                         </Label>
//                       </div>
                      
//                       {/* 💡 NEW: ROOM SERVICE / APARTMENT DELIVERY */}
//                       <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-secondary hover:text-muted">
//                         <RadioGroupItem value="room-service" id="room-service" />
//                         <Label htmlFor="room-service" className="flex items-center cursor-pointer flex-1 hover:text-muted">
//                           <Store className="mr-2 h-5 w-5" />
//                           <div>
//                             <p className="font-medium">Room Service / Apartment Delivery</p>
//                             <p className="text-sm text-muted-foreground hover:text-muted">Delivered to your room/apartment (GHS 10.00)</p>
//                           </div>
//                         </Label>
//                       </div>

//                       {/* 3. IN-STORE PICKUP */}
//                       <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-secondary hover:text-muted">
//                         <RadioGroupItem value="pickup" id="pickup" />
//                         <Label htmlFor="pickup" className="flex items-center cursor-pointer flex-1">
//                           <Store className="mr-2 h-5 w-5" />
//                           <div>
//                             <p className="font-medium">In-Store Pickup</p>
//                             <p className="text-sm text-muted-foreground hover:text-muted">Collect from restaurant (Free)</p>
//                           </div>
//                         </Label>
//                       </div>
//                     </RadioGroup>
//                   </CardContent>
//                 </Card>

//                 {/* Delivery Details */}
//                 {/* 💡 CONDITIONAL CHANGE: Shows if orderType is delivery OR room-service */}
//                 {(orderType === "delivery" || orderType === "room-service") && (
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>
//                         {/* Dynamically adjust title */}
//                         {orderType === "delivery" ? "External Delivery Address" : "Apartment/Room Details"}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="address">
//                           {orderType === "delivery" ? "Street Address" : "Apartment/Room Number"}
//                         </Label>
//                         <Input
//                           id="address"
//                           placeholder={orderType === "delivery" ? "Enter your street address" : "e.g., Block B, Room 402"}
//                           className="placeholder:text-primary-foreground text-muted"
//                           required
//                         />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="city">City / Location</Label>
//                           <Input id="city" placeholder="Accra" required className="placeholder:text-primary-foreground text-muted"/>
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="phone">Phone Number</Label>
//                           <Input
//                             id="phone"
//                             type="tel"
//                             placeholder="+233..."
//                             required
//                             className="placeholder:text-primary-foreground text-muted"
//                           />
//                         </div>
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
//                         <Textarea
//                           className="placeholder:text-primary-foreground text-muted"
//                           id="instructions"
//                           placeholder="Add any special instructions (e.g., Leave at reception)..."
//                           rows={3}
//                         />
//                       </div>
//                       <Button type="button" variant="outline" className="w-full">
//                         <MapPin className="mr-2 h-4 w-4" />
//                         Select Location on Map
//                       </Button>
//                       <p className="text-sm text-muted-foreground">Map integration will be available soon</p>
//                     </CardContent>
//                   </Card>
//                 )}

//                 {/* Contact Information (Same) */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-primary">Contact Information</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="firstName">First Name</Label>
//                         <Input
//                           id="firstName"
//                           required
//                           placeholder="first name"
//                           className="placeholder:text-muted text-sm text-muted"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="lastName">Last Name</Label>
//                         <Input
//                           id="lastName"
//                           required
//                           placeholder="last name"
//                           className="placeholder:text-primary-foreground text-sm text-muted"
//                         />
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="email"
//                         required
//                         className="placeholder:text-primary-foreground text-muted text-sm "
//                       />
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Payment Method (Same) */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Payment Method</CardTitle>
//                   </CardHeader>

//                   <CardContent>
//                     <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
                      
//                       {/* STRIPE */}
//                       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//                         <RadioGroupItem value="stripe" id="stripe" />

//                         <Label
//                           htmlFor="stripe"
//                           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//                         >
//                           <CreditCard className="mr-2 h-5 w-5 group-hover:text-muted" />
//                           <div>
//                             <p className="font-medium group-hover:text-muted">Credit/Debit Card</p>
//                             <p className="text-sm text-muted-foreground group-hover:text-muted">Pay securely with Stripe</p>
//                           </div>
//                         </Label>
//                       </div>

//                       {/* MOBILE MONEY */}
//                       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//                         <RadioGroupItem value="mobile-money" id="mobile-money" />

//                         <Label
//                           htmlFor="mobile-money"
//                           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//                         >
//                           <Wallet className="mr-2 h-5 w-5 group-hover:text-muted" />
//                           <div>
//                             <p className="font-medium group-hover:text-muted">Mobile Money</p>
//                             <p className="text-sm text-muted-foreground group-hover:text-muted">MTN, Vodafone, AirtelTigo</p>
//                           </div>
//                         </Label>
//                       </div>

//                       {/* CASH */}
//                       <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
//                         <RadioGroupItem value="cash" id="cash" />

//                         <Label
//                           htmlFor="cash"
//                           className="flex items-center cursor-pointer flex-1 group-hover:text-muted"
//                         >
//                           <Banknote className="mr-2 h-5 w-5 group-hover:text-muted" />
//                           <div>
//                             <p className="font-medium group-hover:text-muted">Cash on Delivery</p>
//                             <p className="text-sm text-muted-foreground group-hover:text-muted">Pay when order arrives</p>
//                           </div>
//                         </Label>
//                       </div>
//                     </RadioGroup>
//                   </CardContent>
//                 </Card>

//               </div>
//             </div>
//           </form>
//         </div>
        
//         {/* RIGHT COLUMN: Order Summary (Takes 50% width) */}
//         {/* 🛠️ ALIGNMENT FIX: Added md:pt-40 to align with Order Type Card on left */}
//         <div className="md:pt-40">
//           <Card className="sticky top-24">
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3 space-x-3">
//                 {items.map((item) => (
//                   <div key={item.id} className="flex justify-between text-sm">
//                     <span className="text-muted-foreground">
//                       {item.name} x{item.quantity}
//                     </span>
//                     <span>GHS {(item.price * item.quantity).toFixed(2)}</span>
//                   </div>
//                 ))}
//               </div>

//               <Separator className="my-4" />

//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Subtotal</span>
//                   <span>GHS {totalPrice.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Delivery Fee</span>
//                   {/* 💡 FEE DISPLAY: Uses the updated logic */}
//                   <span>GHS {deliveryFee.toFixed(2)}</span>
//                 </div>
//               </div>

//               <Separator className="my-4" />

//               <div className="flex justify-between text-lg font-bold">
//                 <span>Total</span>
//                 <span>GHS {finalTotal.toFixed(2)}</span>
//               </div>

//               <Button type="submit" className="w-full mt-6 bg-background" size="lg" disabled={isSubmitting}>
//                 {isSubmitting ? "Processing..." : "Place Order"}
//               </Button>

//               <p className="text-xs text-muted-foreground text-center mt-4">
//                 By placing your order, you agree to our terms and conditions
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Checkout;
return (
    <div className="min-h-screen bg-background">
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: `url(${elegantBg})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN: Checkout contents */}
        <div>
          <Button variant="ghost" onClick={() => navigate("/cart")} className="mb-6 text-muted">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </Button>

          <h1 className="text-4xl font-bold mb-8 text-muted">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-8">
              <div className=" space-y-6">
                
                {/* Order Type */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Type</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <RadioGroup value={orderType} onValueChange={(value: OrderType) => setOrderType(value)}>
                      
                      {/* 1. EXTERNAL DELIVERY */}
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-secondary hover:text-muted">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <Label htmlFor="delivery" className="flex items-center cursor-pointer flex-1 hover:text-muted">
                          <MapPin className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">External Delivery</p>
                            <p className="text-sm text-muted-foreground hover:text-muted">Delivered to your external location (GHS 20.00)</p>
                          </div>
                        </Label>
                      </div>
                      
                      {/* 2. ROOM SERVICE / APARTMENT DELIVERY */}
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-secondary hover:text-muted">
                        <RadioGroupItem value="room-service" id="room-service" />
                        <Label htmlFor="room-service" className="flex items-center cursor-pointer flex-1 hover:text-muted">
                          <Store className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">Room Service / Apartment Delivery</p>
                            <p className="text-sm text-muted-foreground hover:text-muted">Delivered to your room/apartment (GHS 10.00)</p>
                          </div>
                        </Label>
                      </div>

                      {/* 3. IN-STORE PICKUP */}
                      <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer text-primary hover:bg-secondary hover:text-muted">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex items-center cursor-pointer flex-1">
                          <Store className="mr-2 h-5 w-5" />
                          <div>
                            <p className="font-medium">In-Store Pickup</p>
                            <p className="text-sm text-muted-foreground hover:text-muted">Collect from restaurant (Free)</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Delivery Details */}
                {(orderType === "delivery" || orderType === "room-service") && (
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {orderType === "delivery" ? "External Delivery Address" : "Apartment/Room Details"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">
                          {orderType === "delivery" ? "Street Address" : "Apartment/Room Number"}
                        </Label>
                        <Input
                          id="address"
                          placeholder={orderType === "delivery" ? "Enter your street address" : "e.g., Block B, Room 402"}
                          className="placeholder:text-primary-foreground text-muted"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City / Location</Label>
                          <Input id="city" placeholder="Accra" required className="placeholder:text-primary-foreground text-muted"/>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+233..."
                            required
                            className="placeholder:text-primary-foreground text-muted"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
                        <Textarea
                          className="placeholder:text-primary-foreground text-muted"
                          id="instructions"
                          placeholder="Add any special instructions (e.g., Leave at reception)..."
                          rows={3}
                        />
                      </div>
                      <Button type="button" variant="outline" className="w-full">
                        <MapPin className="mr-2 h-4 w-4" />
                        Select Location on Map
                      </Button>
                      <p className="text-sm text-muted-foreground">Map integration will be available soon</p>
                    </CardContent>
                  </Card>
                )}

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="first name"
                          className="placeholder:text-muted text-sm text-muted"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="last name"
                          className="placeholder:text-primary-foreground text-sm text-muted"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email"
                        required
                        className="placeholder:text-primary-foreground text-muted text-sm "
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={(value: PaymentMethod) => setPaymentMethod(value)}>
                      
                      {/* STRIPE (Credit/Debit Card) */}
                      <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
                        <RadioGroupItem value="stripe" id="stripe" />
                        <Label htmlFor="stripe" className="flex items-center cursor-pointer flex-1 group-hover:text-muted">
                          <CreditCard className="mr-2 h-5 w-5 group-hover:text-muted" />
                          <div>
                            <p className="font-medium group-hover:text-muted">Credit/Debit Card</p>
                            <p className="text-sm text-muted-foreground group-hover:text-muted">Pay securely with Stripe</p>
                          </div>
                        </Label>
                      </div>

                      {/* MOBILE MONEY */}
                      <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
                        <RadioGroupItem value="mobile-money" id="mobile-money" />
                        <Label htmlFor="mobile-money" className="flex items-center cursor-pointer flex-1 group-hover:text-muted">
                          <Wallet className="mr-2 h-5 w-5 group-hover:text-muted" />
                          <div>
                            <p className="font-medium group-hover:text-muted">Mobile Money</p>
                            <p className="text-sm text-muted-foreground group-hover:text-muted">MTN, Telecel, AirtelTigo</p>
                          </div>
                        </Label>
                      </div>

                      {/* CASH */}
                      <div className="group flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-secondary">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex items-center cursor-pointer flex-1 group-hover:text-muted">
                          <Banknote className="mr-2 h-5 w-5 group-hover:text-muted" />
                          <div>
                            <p className="font-medium group-hover:text-muted">Cash on Delivery</p>
                            <p className="text-sm text-muted-foreground group-hover:text-muted">Pay when order arrives</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    {/* ======================================================= */}
                    {/* CONDITIONAL INPUTS */}
                    {/* ======================================================= */}


                    {/* 💳 CREDIT/DEBIT CARD INPUTS */}
                    {paymentMethod === "stripe" && (
                      <div className="mt-6 border-t pt-4 space-y-4">
                        <h4 className="font-semibold text-lg">Card Details</h4>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="0000 0000 0000 0000" required className="text-muted placeholder:text-muted"/>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Card Holder Name</Label>
                          <Input id="cardName" placeholder="John Doe" required className="text-muted placeholder:text-muted"/>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2 col-span-2">
                            <Label htmlFor="expiryDate">Expiry Date (MM/YY)</Label>
                            <Input id="expiryDate" placeholder="01/26" required className="text-muted placeholder:text-muted"/>
                          </div>
                          <div className="space-y-2 col-span-1">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" required type="password" className="text-muted placeholder:text-muted"/>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* 📱 MOBILE MONEY OPERATOR SELECTION */}
                    {paymentMethod === "mobile-money" && (
                      <div className="mt-6 border-t pt-4 space-y-3">
                        <h4 className="font-semibold text-sm">Select Network Operator</h4>
                        <RadioGroup value={mobileNetwork} onValueChange={setMobileNetwork} className="space-y-3">
                          
                          <div className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer hover:bg-secondary/50">
                            <RadioGroupItem value="mtn-momo" id="mtn-momo" />
                            <Label htmlFor="mtn-momo" className="cursor-pointer font-medium flex-1">MTN MoMo</Label>
                          </div>

                          <div className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer hover:bg-secondary/50">
                            <RadioGroupItem value="telecel-cash" id="telecel-cash" />
                            <Label htmlFor="telecel-cash" className="cursor-pointer font-medium flex-1">Telecel Cash (Vodafone Cash)</Label>
                          </div>

                          <div className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer hover:bg-secondary/50">
                            <RadioGroupItem value="at-cash" id="at-cash" />
                            <Label htmlFor="at-cash" className="cursor-pointer font-medium flex-1">AT Cash (AirtelTigo)</Label>
                          </div>
                        </RadioGroup>
                        
                        {/* Input for Phone Number (common for all mobile money) */}
                        <div className="pt-2 space-y-2">
                            <Label htmlFor="momoNumber">Mobile Number ({mobileNetwork.toUpperCase()})</Label>
                            <Input id="momoNumber" type="tel" placeholder="+233 5X XXX XXXX" required className="text-muted placeholder:text-muted"/>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

              </div>
            </div>
          </form>
        </div>
        
        {/* RIGHT COLUMN: Order Summary */}
        <div className="md:pt-40">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 space-x-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x{item.quantity}
                    </span>
                    <span>GHS {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>GHS {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>GHS {deliveryFee.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>GHS {finalTotal.toFixed(2)}</span>
              </div>

              <Button type="submit" className="w-full mt-6 bg-background" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By placing your order, you agree to our terms and conditions
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;