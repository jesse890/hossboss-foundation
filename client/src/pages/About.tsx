import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-24">
        <SectionHeader 
          title="About Hoss Boss" 
          subtitle="Our mission is simple: to serve those who served us."
          light={true}
          className="mb-0"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-blue mx-auto mb-16">
          <p className="lead text-2xl text-primary font-display font-light leading-relaxed">
            The Hoss Boss Foundation was born out of a desire to make a tangible difference in the lives of veterans. 
            We focus on mental health support and educational opportunities, ensuring our heroes have the tools they need to thrive after service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Our Partnership with MCVET</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are proud to align ourselves with the Maryland Center for Veterans Education and Training (MCVET). 
              Through this strategic partnership, we're able to direct funds and resources where they are needed most—providing 
              comprehensive support systems for homeless veterans and other veterans in need.
            </p>
            <Button variant="outline" onClick={() => window.open('https://www.mcvet.org', '_blank')}>Learn more about MCVET</Button>
          </div>
          <div className="bg-secondary/50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-primary mb-6">What We Support</h3>
            <ul className="space-y-4">
              {[
                "Mental Health Counseling",
                "Educational Scholarships",
                "Job Training Programs",
                "Emergency Housing Assistance",
                "Community Integration Events"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-16">
          <h3 className="text-2xl font-display font-bold text-center text-primary mb-8">Our Leadership</h3>
          <div className="max-w-xl mx-auto">
            <ul className="space-y-4">
              {[
                { name: "Jesse Kofler", title: "Co-President" },
                { name: "Jason Dull", title: "Co-President" },
                { name: "Sean Mykietyn", title: "Treasurer" },
                { name: "Chris Howard", title: "Advisor" },
                { name: "Matt Howard", title: "Advisor" },
              ].map((member) => (
                <li key={member.name} className="flex items-center justify-between py-3 px-6 bg-secondary/30 rounded-xl border border-border/50" data-testid={`leader-${member.name.toLowerCase().replace(' ', '-')}`}>
                  <span className="font-bold text-primary text-lg">{member.name}</span>
                  <span className="text-muted-foreground font-medium">{member.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
