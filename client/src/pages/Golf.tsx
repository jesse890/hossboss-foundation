import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin, Trophy, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const REGISTRATION_URL = "https://app.eventcaddy.com/events/cpt-jeffrey-howard-conord-memorial-classic-2026";

export default function Golf() {
  const [iframeBlocked, setIframeBlocked] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/50 bg-accent/10 text-accent font-semibold text-sm mb-6 tracking-wide uppercase">
              Registration Open
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4" data-testid="text-golf-page-title">
              Ninth Annual Jeff Conord Memorial Classic
            </h1>
            <p className="text-xl text-white/80 mb-2">June 19, 2026</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
            <div className="flex items-start gap-3 mb-4">
              <Calendar className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-semibold text-primary">Friday, June 19th, 2026</p>
                <p className="text-muted-foreground text-sm">Check-in 7:30 AM &middot; 9:00 AM Shotgun Start</p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <a href="https://www.golfbullrun.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-accent transition-colors underline underline-offset-2">
                  Bull Run Country Club
                </a>
                <p className="text-muted-foreground text-sm">Haymarket, VA</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-accent mt-0.5" />
              <p className="font-semibold text-primary">4-Person Scramble</p>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-xl p-6 border border-border/50">
            <h3 className="font-semibold text-primary mb-3">What's Included</h3>
            <ul className="space-y-2">
              {[
                "Fundraising raffle and prizes",
                "Chick-fil-A lunch on course + hot dog station",
                "Beverages throughout the round",
                "Awards reception with dinner & drinks",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary rounded-xl p-6 text-white">
            <p className="text-accent font-bold text-sm uppercase tracking-wider mb-2">Benefiting</p>
            <p className="font-semibold mb-3">MCVET — Maryland Center for Veterans Education and Training</p>
            <p className="text-white/80 text-sm mb-4">In Jeff's name. Last year: $9,000 donated. Eight-year total: over $110,000.</p>
            <p className="text-accent font-bold">Goal: $200,000</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden">
          <div className="bg-secondary/30 p-6 border-b border-border/50 flex items-center justify-between">
            <h2 className="text-xl font-display font-bold text-primary">Register Online</h2>
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" data-testid="link-open-registration-tab">
              <Button variant="outline" size="sm" className="gap-2">
                Open in New Tab <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {iframeBlocked ? (
            <div className="p-12 text-center" data-testid="iframe-fallback">
              <p className="text-muted-foreground mb-6 text-lg">
                The registration page cannot be embedded directly. Please open it in a new tab to register.
              </p>
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" data-testid="button-open-registration-tab">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold gap-2">
                  Open Registration in a New Tab <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
            </div>
          ) : (
            <div className="relative">
              {iframeLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/20 z-10">
                  <p className="text-muted-foreground">Loading registration...</p>
                </div>
              )}
              <iframe
                src={REGISTRATION_URL}
                title="Tournament Registration"
                className="w-full border-0"
                style={{ height: "800px" }}
                onLoad={() => setIframeLoading(false)}
                onError={() => setIframeBlocked(true)}
                data-testid="iframe-registration"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
