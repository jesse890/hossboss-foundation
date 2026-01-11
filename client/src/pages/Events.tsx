import { useEvents } from "@/hooks/use-events";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function Events() {
  const { data: events, isLoading, error } = useEvents();

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
        Error loading events. Please try again later.
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <div className="bg-primary py-20 px-4">
        <SectionHeader 
          title="Upcoming Events" 
          subtitle="Join our community in supporting veterans through engaging events and fundraisers."
          light={true}
          className="mb-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid gap-8">
          {events?.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
              <p className="text-xl text-muted-foreground">No upcoming events scheduled at the moment.</p>
              <Button className="mt-4" variant="outline">Check back soon</Button>
            </div>
          ) : (
            events?.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 flex flex-col md:flex-row group hover:shadow-xl transition-all duration-300"
              >
                <div className="md:w-1/3 relative overflow-hidden h-64 md:h-auto">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={event.imageUrl || "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80"} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-lg p-3 text-center min-w-[70px] shadow-sm z-20">
                    <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      {format(new Date(event.date), "MMM")}
                    </span>
                    <span className="block text-2xl font-display font-bold text-primary">
                      {format(new Date(event.date), "dd")}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-accent" />
                        {format(new Date(event.date), "EEEE, h:mm a")}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent" />
                        {event.location}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {event.externalUrl ? (
                      <a href={event.externalUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary text-white hover:bg-primary/90 shadow-md">
                          Register / Details
                        </Button>
                      </a>
                    ) : (
                      <Button className="bg-primary text-white hover:bg-primary/90 shadow-md">
                        Register Now
                      </Button>
                    )}
                    <Button variant="outline" className="border-primary/20 hover:border-primary text-primary">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
