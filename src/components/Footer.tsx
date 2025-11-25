import { Coffee, MapPin, Phone, Mail, Clock,Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/elm-cafe-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background/ text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_auto_auto] gap-1 md:gap-1">
          {/* Brand */}
         <div className="flex items-center justify-between h-16 gap-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <img src={logo} alt="Elm Café Logo" className="h-14" />
          </Link>
          
            {/* <p className="text-primary-foreground/80 text-sm">
              Redefining dining experiences with quality, sustainability, and local ingredients.
            </p> */}
          </div>

          {/* Quick Links */}
          <div className="whitespace-nowrap">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" className="text-primary-foreground/80 hover:text-secondary transition-colors lg:text-md sm:text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors lg:text-md sm:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors lg:text-md sm:text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors lg:text-md sm:text-sm">
                  Reservations
                </Link>
              </li>
              <li >
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors lg:text-md sm:text-sm">
                  Gift Cards
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
               <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Chef's corner
                </Link>
              </li>
               <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Loyalty & Reviews
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Hours */}
          <div className="whitespace-nowrap">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="lg:text-md sm:text-sm">Mon - Sat: 6:30 AM - 10:00 PM</li>
              <li className="lg:text-md sm:text-sm">Sunday: 8:00 AM - 8:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="whitespace-nowrap ">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 ">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 lg:text-md sm:text-sm">Embassy Gardens, Accra</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 lg:text-md sm:text-sm">+233 59 281 6692</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 lg:text-md sm:text-sm">The Lennox, Accra</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 lg:text-md sm:text-sm">+233 53 044 1580</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:management@elmcafe.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                 <span className="lg:text-md sm:text-sm">management@elmcafe.com</span> 
                </a>
              </li>
            </ul>
          </div>

          <div className="whitespace-nowrap flex flex-col">
             <h3 className="font-semibold mb-4">Social Handles</h3>
             <div className="text-sm text-primary flex justify-start gap-4 text-secondary">
               <a href="https://web.facebook.com/elmcafegh"><Facebook /></a> 
              <a href="https://www.instagram.com/elmcafegh?igsh=MWxiZHRtMWt2dGJxdA=="><Instagram /></a>  
             </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Elm Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
