import { Card } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Bideez</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">Turning Clicks Into Customers</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <Card className="p-8 md:p-12 shadow-elegant transition-smooth hover:shadow-xl">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Bideez is a performance-driven digital growth agency helping businesses generate qualified leads, increase sales, and scale through Google Ads (PPC), Meta Ads, Upwork Lead Generation, and LinkedIn Outreach.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Since 2018, we've partnered with startups, agencies, and growing businesses to build predictable client acquisition systems. By combining data-driven marketing, strategic business development, and proven outreach methodologies, we help our clients reach the right audience and achieve measurable business growth.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our mission is simple: deliver quality opportunities, measurable results, and long-term partnerships. Whether it's running high-performing advertising campaigns or generating B2B leads through targeted outreach, we focus on strategies that create real business impact.
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