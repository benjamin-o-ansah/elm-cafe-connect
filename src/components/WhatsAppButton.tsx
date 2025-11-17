import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {SocialIcon} from 'react-social-icons';

const WhatsAppButton = () => {
 
  const handleWhatsAppClick = () => {
    // Embassy Gardens phone number
    
    const message = "Hello Elm Cafe! I have a question about...";
     const phoneNumber = "233592816692";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-24 h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white z-50"
      title="Chat on WhatsApp"
    >
      <SocialIcon network="whatsapp"/>
      {/* <MessageCircle className="h-6 w-6" /> */}
    </Button>
  );
};

export default WhatsAppButton;
