import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, HeartHandshake } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          {/* American Flag aesthetic overlay */}
          <div className="absolute inset-0 bg-primary/90 z-10 mix-blend-multiply" />
          {/* golf course scenic */}
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
              <span className="text-accent">Action & Support</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-light">
              Dedicated to Veterans' mental health and education in partnership with MCVET. 
              Continuing the legacy of Captain Jeffery Howard Conord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg shadow-accent/20">
                  Upcoming Events
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg h-14 px-8 rounded-full">
                  Our Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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

      {/* Impact Stats */}
      <section className="py-20 bg-white relative -mt-20 z-30 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-xl border border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-8">
          <div className="p-6">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">$120k+</h3>
            <p className="text-muted-foreground font-medium">Raised for Veterans</p>
          </div>
          <div className="p-6 border-y md:border-y-0 md:border-x border-border/50">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">8 Years</h3>
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

      {/* Dedication Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl -rotate-2" />
              {/* military portrait placeholder */}
              <img 
                src="https://pixabay.com/get/g3cabd5f25da27e7f180fcdf3ea7a8dda430586a9aeab96d28df3058d49f5973ba300d9a99b05e55809d1482b2baf763c9487154cedb2be2413672ff1b120fe0c_1280.jpg" 
                alt="Captain Jeffery Howard Conord" 
                className="relative rounded-xl shadow-2xl w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
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

      {/* Upcoming Events Preview */}
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
            {/* Featured Event Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-primary text-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              {/* golf tournament action shot */}
              <img 
                src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80" 
                alt="Annual Golf Tournament" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-20 p-8 h-96 flex flex-col justify-end">
                <div className="bg-accent text-primary font-bold text-xs px-3 py-1 rounded-full inline-block w-fit mb-4">
                  Signature Event
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">9th Annual Golf Tournament</h3>
                <p className="text-white/80 mb-6 line-clamp-2">
                  Join us for a day on the greens to support veteran mental health programs.
                </p>
                <Link href="/events">
                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold">
                    Register Now
                  </Button>
                </Link>
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
