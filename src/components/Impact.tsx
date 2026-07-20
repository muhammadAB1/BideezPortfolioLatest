import { Card } from "@/components/ui/card";
import { Award, FileText, TrendingUp, Globe, Briefcase, Users, Megaphone, Target } from "lucide-react";

const stats = [
  { icon: Award, value: "7+ Years", label: "Of Industry Experience" },
  { icon: FileText, value: "10,000+", label: "Upwork Proposals Delivered" },
  { icon: TrendingUp, value: "200,000+", label: "Business Leads Generated" },
  { icon: Globe, value: "50+", label: "Clients Served Worldwide" },
  { icon: Briefcase, value: "25+", label: "Projects Successfully Coordinated" },
  { icon: Users, value: "20+", label: "Member Teams Managed" },
];

const highlights = [
  {
    icon: Megaphone,
    title: "Multi-Channel Ad Campaigns",
    description: "Google Ads & Meta Ads campaigns across multiple industries.",
  },
  {
    icon: Target,
    title: "Performance-Driven Marketing",
    description: "Focused on qualified leads and measurable ROI.",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Impact</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Numbers that reflect the growth we've delivered
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="p-6 text-center shadow-md hover:shadow-elegant transition-smooth"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="p-8 shadow-md hover:shadow-elegant transition-smooth flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <highlight.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
