import { Card } from "@/components/ui/card";
import { Linkedin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "../images/AliLead.png";

const CEO = () => {
  return (
    <section id="ceo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-elegant">
            <div className="grid md:grid-cols-[300px,1fr] gap-8 p-8 md:p-12">
              <div className="flex flex-col items-center md:items-start space-y-6">
                <div className="w-56 h-56 border-4 border-primary/20 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={img1}
                    alt="Muhammad Ali"
                    className="object-cover w-full h-full"
                  />
                </div>


                <div className="text-center md:text-left w-full">
                  <h3 className="text-2xl font-bold mb-1">Muhammad Ali</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">PMP® Certified | Founder @ Bideez | Business Development Strategist</p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/talibji/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <Award className="w-3 h-3" />
                    <span>PSM 1</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <Award className="w-3 h-3" />
                    <span>PMP</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Meet Our Founder</h2>
                  <p className="text-lg text-muted-foreground font-medium">
                    BD @Clickysoft Inc | Project Manager @Wallsoft Technologies | Project Coordinator & BD @Tplex | Upwork Team Lead | Upwork Specialist
                  </p>
                </div>

                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Muhammad Ali is a PMP® Certified Project Manager and business growth professional with over 7 years of experience in project management, business development, client acquisition, and digital growth strategies.
                  </p>

                  <p>
                    As the Founder and Growth Lead of Bideez, he helps startups, agencies, and businesses scale through Google Ads (PPC), Meta Ads, Upwork Lead Generation, and LinkedIn Outreach. His focus is on building predictable lead generation systems that deliver measurable business results
                  </p>

                  <p>
                    Throughout his career, Muhammad has successfully managed software projects, coordinated cross-functional teams, developed business growth strategies, and built long-term client relationships across international markets.
                  </p>

                  <p>
                    Before founding Bideez, Muhammad gained valuable experience in Project Management, Business Development, and Software Delivery, working with technology companies on fintech products, software implementation, and global client management.
                  </p>

                  <p>
                    I also have entrepreneurial experience through my work with Amazon, where I gained deep insights into e-commerce strategies, online marketplace dynamics, and customer engagement.
                  </p>
                </div>

                <div className="relative mt-2 pl-5 border-l-2 border-primary/40">
                  <p className="text-sm font-semibold tracking-wide uppercase text-primary mb-2">
                    His mission is simple:
                  </p>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed italic">
                    Help businesses generate more qualified leads, close more clients, and achieve sustainable growth through strategy, execution, and performance marketing.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CEO;
