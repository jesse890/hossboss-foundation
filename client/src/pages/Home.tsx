import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, HeartHandshake, MapPin, Clock, Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { CountUpUSD } from "@/components/CountUpUSD";
import golfGroupPhoto from "@assets/IMG_4277_1768183625522.jpeg";
import jeffConordPhoto from "@assets/Jeff_Conord_1772572664422.jpg";

const REGISTRATION_URL = "https://app.eventcaddy.com/events/cpt-jeffrey-howard-conord-memorial-classic-2026";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 z-10 mix-blend-multiply" />
          <img 
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80" 
            alt="Golf Course Hero" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/50 bg-accent/10 text-accent font-semibold text-sm mb-6 tracking-wide uppercase">
              Supporting Our Veterans
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Honoring Service through <br/>
              <span className="text-accent">Jeff Conord Memorial Classic</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-light">
              Supporting Veterans' mental health and education in partnership with MCVET. 
              Continuing the legacy of Captain Jeffery Howard Conord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-register-tournament">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg shadow-accent/20">
                  Register for the 2026 Golf Tournament
                </Button>
              </a>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg h-14 px-8 rounded-full">
                  Our Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white relative -mt-20 z-30 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-xl border border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-8">
          <div className="p-6">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2" data-testid="text-total-raised">$109k+</h3>
            <p className="text-muted-foreground font-medium">Raised for Veterans</p>
          </div>
          <div className="p-6 border-y md:border-y-0 md:border-x border-border/50">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">9 Years</h3>
            <p className="text-muted-foreground font-medium">Annual Golf Tournament</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">MCVET</h3>
            <p className="text-muted-foreground font-medium">Strategic Partner</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/[0.03] border-y border-border/30" data-testid="section-why-we-do-this">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              Our Purpose
              <div className="w-8 h-0.5 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6" data-testid="text-why-title">
              Why We Do This
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10" data-testid="text-why-description">
              The Hoss Boss Foundation was created to honor CPT Jeff Conord and support veterans facing PTSD, substance abuse, and the challenges of transition. Our annual Jeff Conord Memorial Classic raises funds for MCVET (Maryland Center for Veterans Education and Training). Over the past eight years, our community has raised over $109,000 for veterans — and we're building toward $250,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" data-testid="link-why-register">
                <Button size="lg" className="bg-accent text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg shadow-accent/20 w-full sm:w-auto">
                  Register / Sponsor for 2026 <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="#jeff-story" data-testid="link-why-jeff-story">
                <Button size="lg" variant="outline" className="border-primary/30 text-primary font-semibold text-lg h-14 px-8 rounded-full w-full sm:w-auto">
                  Read Jeff's Story <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white" data-testid="section-tournament-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-accent font-bold tracking-wider uppercase text-sm mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              Signature Event
              <div className="w-8 h-0.5 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4" data-testid="text-tournament-title">
              Ninth Annual Jeff Conord Memorial Classic
            </h2>
            <p className="text-2xl text-accent font-semibold" data-testid="text-tournament-date">
              June 19, 2026
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Tournament Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Friday, June 19th, 2026</p>
                      <p className="text-muted-foreground text-sm">Check-in at 7:30 AM &middot; 9:00 AM Shotgun Start</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">
                        <a href="https://www.golfbullrun.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-2" data-testid="link-bull-run">
                          Bull Run Country Club
                        </a>
                      </p>
                      <p className="text-muted-foreground text-sm">Haymarket, VA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="font-semibold text-primary">4-Person Scramble</p>
                  </div>
                </div>

                <div className="border-t border-border/50 mt-6 pt-6">
                  <h4 className="font-semibold text-primary mb-4">What's Included</h4>
                  <ul className="space-y-3">
                    {[
                      "Fundraising raffle and prizes",
                      "Chick-fil-A lunch delivered on course + hot dog station",
                      "Beverages throughout the round",
                      "Awards reception with dinner and drinks afterward",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/50 mt-6 pt-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-primary">Arrive early</span> to register, purchase mulligans and raffle tickets (cash/Venmo/PayPal accepted), and practice on the range (included).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" data-testid="button-register-tournament">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary font-bold text-lg h-14 rounded-full shadow-lg shadow-accent/20 gap-2">
                    Register Now <ExternalLink className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80" 
                  alt="Golf course at Bull Run Country Club — placeholder, replace with tournament hero photo"
                  className="w-full h-full object-cover"
                  data-testid="img-tournament-hero"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white/70 text-xs italic">Placeholder — replace with tournament hero photo</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&q=80" 
                    alt="Raffle and prizes — placeholder"
                    className="w-full h-full object-cover"
                    data-testid="img-raffle-placeholder"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-2">
                    <span className="text-white text-[10px] italic">Placeholder: Raffle/Prizes</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80" 
                    alt="Awards reception — placeholder"
                    className="w-full h-full object-cover"
                    data-testid="img-reception-placeholder"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-2">
                    <span className="text-white text-[10px] italic">Placeholder: Reception</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                  <img 
                    src={golfGroupPhoto}
                    alt="Group photo from previous tournament"
                    className="w-full h-full object-cover"
                    data-testid="img-group-photo"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary" data-testid="section-benefiting">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Benefiting</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4" data-testid="text-mcvet-benefit">
              Proceeds benefit MCVET — Maryland Center for Veterans Education and Training — in Jeff's name.
            </h3>
            <div className="bg-white/10 rounded-xl p-6 mt-8 border border-white/20">
              <p className="text-white/90 text-lg leading-relaxed" data-testid="text-impact">
                Last year we donated <span className="font-bold text-accent">$9,000</span>; eight-year total is <CountUpUSD value={109176.91} className="font-bold text-accent" />.
              </p>
              <p className="text-white text-xl font-display font-bold mt-3">
                Goal: reach <span className="text-accent">$250,000</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="jeff-story" className="py-24 bg-secondary/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl -rotate-2" />
              <img 
                src={jeffConordPhoto}
                alt="Captain Jeffery Howard Conord" 
                className="relative rounded-xl shadow-2xl w-full aspect-[4/5] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                data-testid="img-jeff-conord"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-destructive font-bold tracking-wider uppercase text-sm mb-4">
                <div className="w-8 h-0.5 bg-destructive" />
                In Memoriam
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Captain Jeffery Howard Conord
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Hoss Boss Foundation was established in honor of Captain Conord, a dedicated serviceman whose legacy of leadership and compassion lives on through our work.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We channel our grief into action, creating opportunities and support systems for veterans who have given so much for our nation. Every event we host and every dollar we raise is a tribute to his service.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white group">
                  Read His Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join us in supporting our mission.</p>
            </div>
            <Link href="/events">
              <Button variant="link" className="text-primary font-semibold group">
                View All Events <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-primary text-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src={golfGroupPhoto}
                alt="Jeff Conord Memorial Classic"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-20 p-8 h-96 flex flex-col justify-end">
                <div className="bg-accent text-primary font-bold text-xs px-3 py-1 rounded-full inline-block w-fit mb-4">
                  Signature Event
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">9th Annual Jeff Conord Memorial Classic</h3>
                <p className="text-white/80 mb-6 line-clamp-2">
                  June 19, 2026 at Bull Run Country Club. Join us on the greens to support veteran mental health programs.
                </p>
                <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="w-full" data-testid="link-register-event-card">
                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold">
                    Register Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-2xl p-8 border border-border/50 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Become a Sponsor</h3>
              <p className="text-muted-foreground mb-8 max-w-md">
                Make a lasting impact. Your sponsorship directly supports veterans through MCVET programs.
              </p>
              <Link href="/sponsors">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  View Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
