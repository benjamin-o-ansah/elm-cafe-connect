import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/elm-cafe-logo.png";
import elegantBg from "@/assets/bg-img.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const moreLinks = [
    { name: "Promotions", path: "/promotions" },
    { name: "Gift Cards", path: "/gift-cards" },
    { name: "Chef's Corner", path: "/chefs-corner" },
    { name: "Loyalty & Reviews", path: "/loyalty" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-border relative">
       <div
    className="absolute inset-0 opacity-10 pointer-events-none"
    style={{
      backgroundImage: `url(${elegantBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  />
      <div className=" relative container mx-auto px-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform hover:scale-105">
            <img src={logo} alt="Elm Café Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full text-sm"
              >
                {link.name}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm bg-transparent text-muted hover:text-muted data-[state=open]:text-muted">
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2 bg-background/95 backdrop-blur-md border border-border text-muted">
                      {moreLinks.map((link) => (
                        <li key={link.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.path}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-muted focus:bg-accent focus:text-muted text-sm"
                            >
                              {link.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/signin">
              <Button variant="outline" size="sm" className="backdrop-blur-lg text-primary-foreground">
                Sign In
              </Button>
            </Link>
            {/* <Link to="/dashboard">
              <Button variant="outline" size="sm" className="backdrop-blur-md text-primary-foreground">
                Dashboard
              </Button>
            </Link> */}
            <Link to="/signup">
              <Button  variant="outline" size="sm" className="backdrop-blur-md text-primary-foreground">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted hover:text-secondary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[800px] pb-4 overflow-y-scroll" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-secondary transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
            {moreLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-secondary transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Link to="/signin" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full text-muted hover:text-secondary">
                  Sign In
                </Button>
              </Link>
              {/* <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full text-primary-foreground">
                  Dashboard
                </Button> */}
              {/* </Link> */}
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full text-muted hover:text-secondary">Order Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
