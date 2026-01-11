import { useSponsors } from "@/hooks/use-sponsors";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Sponsors() {
  const { data: sponsors, isLoading, error } = useSponsors();

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-destructive">
        Error loading sponsors.
      </div>
    );
  }

  const tiers = ["Gold", "Silver", "Bronze"];
  const sponsorsByTier = tiers.map(tier => ({
    tier,
    items: sponsors?.filter(s => s.tier === tier) || []
  }));

  return (
    <div className="min-h-screen pb-24">
      <div className="bg-primary py-24 px-4 text-center">
        <SectionHeader 
          title="Our Valued Sponsors" 
          subtitle="We are deeply grateful for the businesses and individuals who make our mission possible."
          light={true}
          className="mb-8"
        />
        <Button size="lg" className="bg-accent text-primary font-bold hover:bg-accent/90 shadow-xl shadow-accent/20">
          Become a Sponsor
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {sponsorsByTier.map((group) => group.items.length > 0 && (
          <section key={group.tier}>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-border flex-1" />
              <h3 className={`text-2xl font-bold uppercase tracking-widest font-display
                ${group.tier === 'Gold' ? 'text-[#D4AF37]' : 
                  group.tier === 'Silver' ? 'text-[#C0C0C0]' : 'text-[#CD7F32]'}
              `}>
                {group.tier} Partners
              </h3>
              <div className="h-px bg-border flex-1" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((sponsor, idx) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center h-full"
                >
                  <div className="h-32 w-full flex items-center justify-center mb-6 p-4 bg-secondary/30 rounded-lg group-hover:bg-white transition-colors">
                    {sponsor.logoUrl ? (
                      <img 
                        src={sponsor.logoUrl} 
                        alt={sponsor.name} 
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                      />
                    ) : (
                      <div className="text-2xl font-bold text-muted-foreground/30 font-display">
                        {sponsor.name.substring(0, 2)}
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary mb-2">{sponsor.name}</h4>
                  
                  {sponsor.websiteUrl && (
                    <a 
                      href={sponsor.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
                    >
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {sponsors?.length === 0 && (
          <div className="text-center py-20 bg-secondary/30 rounded-2xl">
            <h3 className="text-xl font-medium text-muted-foreground mb-4">No sponsors listed yet.</h3>
            <p className="text-muted-foreground mb-8">Be the first to support our cause!</p>
            <Button variant="outline">Contact Us for Sponsorship</Button>
          </div>
        )}
      </div>
    </div>
  );
}
