import { useSponsors } from "@/hooks/use-sponsors";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2, Home, Briefcase, Heart, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const EVENTCADDY_URL = "https://app.eventcaddy.com/events/cpt-jeffrey-howard-conord-memorial-classic-2026";

const impactItems = [
  { icon: Home, label: "Housing Support", desc: "Helps veterans access transitional housing" },
  { icon: Briefcase, label: "Job Training", desc: "Supports career placement and workforce development" },
  { icon: Heart, label: "Recovery Services", desc: "Assists veterans dealing with PTSD and substance abuse" },
  { icon: Users, label: "Community Support", desc: "Builds a network of care and connection for veterans" },
];

const sponsorshipTiers = [
  {
    name: "Gold Sponsor",
    color: "text-[#D4AF37]",
    borderColor: "border-[#D4AF37]/40",
    bgColor: "bg-[#D4AF37]/5",
    benefits: ["Premier logo placement", "Recognition at awards reception", "Featured on website and social"],
  },
  {
    name: "Silver Sponsor",
    color: "text-[#8A8A8A]",
    borderColor: "border-[#C0C0C0]/40",
    bgColor: "bg-[#C0C0C0]/5",
    benefits: ["Logo placement", "Recognition at reception", "Website listing"],
  },
  {
    name: "Bronze Sponsor",
    color: "text-[#CD7F32]",
    borderColor: "border-[#CD7F32]/40",
    bgColor: "bg-[#CD7F32]/5",
    benefits: ["Website listing", "On-site signage"],
  },
  {
    name: "Hole Sponsor",
    color: "text-primary",
    borderColor: "border-primary/20",
    bgColor: "bg-primary/5",
    benefits: ["Signage at a tee box/green", "Website listing"],
  },
  {
    name: "In-Kind Sponsor",
    color: "text-primary",
    borderColor: "border-primary/20",
    bgColor: "bg-primary/5",
    benefits: ["Recognition for donated items/services", "Website listing"],
  },
];

const steps = [
  { num: "1", text: "Click Sponsor via EventCaddy" },
  { num: "2", text: "Select sponsorship level or donate" },
  { num: "3", text: "We follow up for logo + recognition details" },
];

export default function Sponsors() {
  const { data: sponsors, isLoading, error } = useSponsors();

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center" data-testid="loading-sponsors">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-destructive" data-testid="error-sponsors">
        Error loading sponsors.
      </div>
    );
  }

  const validSponsors = sponsors?.filter(s => s.name !== "Patriot Construction" && s.name !== "Liberty Financial" && s.name !== "Maryland Motors") || [];

  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <div className="bg-primary py-24 px-4 text-center">
        <SectionHeader
          title="Sponsor the 2026 Jeff Conord Memorial Classic"
          subtitle="Your sponsorship directly supports veterans through the Hoss Boss Foundation and our beneficiary partner MCVET."
          light={true}
          className="mb-8"
        />
        <div className="max-w-xl mx-auto space-y-3 mb-10">
          {["Reach local veteran supporters and business leaders",
            "Sponsor recognition before, during, and after the event",
            "Funds go directly to mission impact"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-primary-foreground/90 text-sm sm:text-base" data-testid="text-intro-bullet">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <a href={EVENTCADDY_URL} target="_blank" rel="noopener noreferrer" data-testid="link-become-sponsor-hero">
          <Button size="lg" className="bg-accent text-primary font-bold hover:bg-accent/90 shadow-xl shadow-accent/20">
            Become a Sponsor
          </Button>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Impact Section */}
        <section data-testid="section-impact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-display">Where Your Sponsorship Goes</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
              Every dollar raised through the Jeff Conord Memorial Classic supports veterans transitioning back to civilian life through our partner organization, MCVET (Maryland Center for Veterans Education and Training).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                data-testid={`card-impact-${idx}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href={EVENTCADDY_URL} target="_blank" rel="noopener noreferrer" data-testid="link-sponsor-impact">
              <Button size="lg" className="bg-accent text-primary font-bold hover:bg-accent/90 shadow-lg shadow-accent/20 px-10">
                Sponsor the Tournament
              </Button>
            </a>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section data-testid="section-tiers">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-display">Sponsorship Tiers</h2>
            <p className="text-muted-foreground text-lg">Choose a level that fits your organization</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`rounded-xl border-2 ${tier.borderColor} ${tier.bgColor} p-6 flex flex-col`}
                data-testid={`card-tier-${idx}`}
              >
                <h3 className={`text-xl font-bold ${tier.color} mb-4 font-display`}>{tier.name}</h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href={EVENTCADDY_URL} target="_blank" rel="noopener noreferrer" data-testid={`link-sponsor-tier-${idx}`}>
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
                    Sponsor via EventCaddy <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section data-testid="section-how-it-works">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-display">How Sponsorship Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center"
                data-testid={`step-${idx}`}
              >
                <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  {step.num}
                </div>
                <p className="text-foreground font-medium">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Current Sponsors */}
        <section data-testid="section-current-sponsors">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-border flex-1" />
            <h2 className="text-2xl font-bold text-primary uppercase tracking-widest font-display">Current Sponsors</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          {validSponsors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {validSponsors.map((sponsor, idx) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center h-full"
                  data-testid={`card-sponsor-${sponsor.id}`}
                >
                  <div className="h-24 w-full flex items-center justify-center mb-4 p-4 bg-secondary/30 rounded-lg">
                    {sponsor.logoUrl && !sponsor.logoUrl.includes("placeholder") ? (
                      <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary/40 font-display">
                          {sponsor.name.split(" ").map(w => w[0]).join("").substring(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{sponsor.name}</h4>
                  {sponsor.websiteUrl && sponsor.websiteUrl !== "#" && (
                    <a
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
                      data-testid={`link-sponsor-website-${sponsor.id}`}
                    >
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-secondary/30 rounded-2xl" data-testid="empty-sponsors">
              <p className="text-lg text-muted-foreground mb-6">Be the first to sponsor the 2026 event.</p>
              <a href={EVENTCADDY_URL} target="_blank" rel="noopener noreferrer" data-testid="link-sponsor-empty">
                <Button className="bg-accent text-primary font-bold hover:bg-accent/90">
                  Become a Sponsor
                </Button>
              </a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
