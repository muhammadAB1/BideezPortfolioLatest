import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 shadow-elegant gradient-hero text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                  <Lightbulb className="w-10 h-10 text-secondary" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Vision</h2>
              
              <p className="text-xl md:text-2xl leading-relaxed text-center text-primary-foreground/95 text-balance">
                To become a leading global provider of LinkedIn lead generation services, expanding into SEO, Google Ads, and cold calling. While AI is transforming industries and replacing many professions, we believe sales will always be essential because building trust, understanding human needs, and closing deals require the human touch.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;