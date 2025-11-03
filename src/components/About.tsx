import { Card } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Bideez ORG</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">Smart Bidding, Real Results</p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-12">
          <Card className="p-8 md:p-12 shadow-elegant transition-smooth hover:shadow-xl">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Bideez is a remotely managed team of experienced Business Developers, specializing in winning high-value projects on Upwork and LinkedIn. Since 2018, we've been helping freelancers and agencies boost their success rates with targeted research, persuasive proposals, and proven bidding strategies.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our journey began with our very first client, Technology Plex, a well-known software company in Pakistan and the United States. From that first win to now partnering with clients worldwide, we've spent over 7 years refining our approach to make project acquisition smarter, faster, and more effective. At Bideez, we don't just bid — we build lasting opportunities.
            </p>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center shadow-md hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">7+ Years</h3>
              <p className="text-muted-foreground">Experience in project acquisition</p>
            </Card>
            
            <Card className="p-6 text-center shadow-md hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Clients</h3>
              <p className="text-muted-foreground">From Pakistan to worldwide partnerships</p>
            </Card>
            
            <Card className="p-6 text-center shadow-md hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">Higher success rates, faster wins</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;