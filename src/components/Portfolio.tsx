import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const portfolioItems = [
  {
    name: "Syed Gaiyoor H.",
    role: "Google Ads Specialist",
    image: "https://drive.google.com/uc?export=view&id=1tbGJNPAqfnim3E3bRlb4gmZqlQ2-kE3a",
    achievements: [
      "$20K+ in earnings",
      "93% Job Success & Top Rated Badge",
      "33 successful jobs with 25+ clients",
      "$300K+ PPC spend & $1M+ client revenue"
    ],
  },
  {
    name: "Akasha Y.",
    role: "Brand Identity & Logo Design",
    image: "https://drive.google.com/uc?export=view&id=1IN00ruHQTdsElnHdKWPo3tyFGcee8yZl",
    achievements: [
      "$70K+ in Total Earnings",
      "95% Job Success Score & Top Rated Badge",
      "400+ Successful Projects",
      "$25/hr Rate Sustained"
    ],
  },
  {
    name: "Shahriyar",
    role: "Graphic & Brand Identity Designer",
    image: "https://drive.google.com/uc?export=view&id=17otx0WYX2btf5R1Y3lKzuZqonAzYfo7t",
    achievements: [
      "$15K+ earnings in design projects",
      "95%+ Job Success Score",
      "40+ completed projects",
      "Premium design work positioning"
    ],
  },
  {
    name: "Muaqib",
    role: "Full Stack Web Developer",
    image: "https://drive.google.com/uc?export=view&id=1irXCX6o9HKIZ-q73FM6b8JaH7B1q7pUA",
    achievements: [
      "$18K+ earnings in web development",
      "97% Job Success Score",
      "45+ successful projects",
      "Long-term and repeat clients"
    ],
  },
  {
    name: "Syed Hassan",
    role: "Amazon PPC Manager",
    image: "https://drive.google.com/uc?export=view&id=1NmWLf01jjkQqhuPIWZrM8vm4dtq-nYPB",
    achievements: [
      "$100K+ total earnings",
      "Top Rated Plus with 100% Job Success",
      "11,000+ hours worked",
      "Trusted long-term client base"
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Success Stories</h2>
          <p className="text-xl text-muted-foreground">Real clients, real results - see how we've helped professionals grow on Upwork</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-elegant transition-smooth group">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{item.role}</p>
                </div>
                
                <div className="space-y-2">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <Badge className="bg-success text-success-foreground">Bideez Success</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
