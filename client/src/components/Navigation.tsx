import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/sponsors", label: "Our Sponsors" },
    { href: "/about", label: "About Us" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-display font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              HB
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-primary">Hoss Boss</span>
              <span className="text-xs tracking-wider text-muted-foreground font-medium">FOUNDATION</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 relative group py-2
                    ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'}
                  `}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300
                    ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}
                  `} />
                </Link>
              ))}
            </div>
            <Button className="bg-destructive hover:bg-destructive/90 text-white shadow-md hover:shadow-lg transition-all gap-2">
              <Heart className="w-4 h-4 fill-current" />
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-primary hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-lg font-medium py-2 border-b border-border/50
                  ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground'}
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-destructive hover:bg-destructive/90 text-white mt-4 gap-2">
              <Heart className="w-4 h-4 fill-current" />
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
