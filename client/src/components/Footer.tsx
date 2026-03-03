import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-display">Hoss Boss Foundation</h3>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Supporting Veterans' mental health and education. Honoring the legacy of Captain Jeffery Howard Conord.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent font-display">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/events" className="hover:text-accent transition-colors">Upcoming Events</Link></li>
              <li><Link href="/sponsors" className="hover:text-accent transition-colors">Our Sponsors</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Mission</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Donate</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent font-display">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:jessekofler@gmail.com" className="hover:text-accent transition-colors" data-testid="link-email">jessekofler@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:540-845-1191" className="hover:text-accent transition-colors" data-testid="link-phone">540-845-1191</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Chantilly, VA</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent font-display">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/hoss-boss-foundation/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/jeffconordmemorialclassic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Hoss Boss Foundation. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
