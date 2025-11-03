import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const CEO = () => {
  return (
    <section id="ceo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-elegant">
            <div className="grid md:grid-cols-[300px,1fr] gap-8 p-8 md:p-12">
              <div className="flex flex-col items-center md:items-start space-y-6">
                <Avatar className="w-56 h-56 border-4 border-primary/20">
                  <AvatarImage 
                    src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png" 
                    alt="Muhammad Ali"
                  />
                  <AvatarFallback className="text-4xl bg-primary/10 text-primary">MA</AvatarFallback>
                </Avatar>
                
                <div className="text-center md:text-left w-full">
                  <h3 className="text-2xl font-bold mb-1">Muhammad Ali</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">CEO & Founder</p>
                  
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Meet Our CEO</h2>
                  <p className="text-lg text-muted-foreground font-medium">
                    BD @Clickysoft Inc | Project Manager @Wallsoft Technologies | Project Coordinator & BD @Tplex | Upwork Team Lead | Upwork Specialist
                  </p>
                </div>
                
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    At Bideez, I lead strategic sales and marketing initiatives, focusing on expanding our presence into LinkedIn lead generation through SEO, Google Ads, and cold calling. I believe that while AI is transforming many industries, the art and strategy of sales will always remain essential.
                  </p>
                  
                  <p>
                    Previously at Wallsoft Technologies Pvt Ltd, I played a key role in business development and project coordination, driving growth in fintech-focused software solutions and implementing platforms like Odoo for diverse business needs.
                  </p>
                  
                  <p>
                    At Clickysoft, where I currently serve as a Business Developer, I focus on securing high-value software projects on Upwork and managing client relationships to ensure smooth project execution.
                  </p>
                  
                  <p>
                    My journey began at Tplex, where I worked as a Project Coordinator and Business Developer, honing my skills in Upwork bidding, proposal writing, and client communication to win international projects.
                  </p>
                  
                  <p>
                    I also have entrepreneurial experience through my work with Amazon, where I gained deep insights into e-commerce strategies, online marketplace dynamics, and customer engagement.
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
