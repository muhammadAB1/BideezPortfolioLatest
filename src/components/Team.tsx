import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import img1 from "../images/Abrar.png";
import img2 from "../images/Hasan.png";
import img3 from "../images/Ali.png";
import img4 from "../images/Sarah.jpg";
import img5 from "../images/Shafaq.jpg";




const teamMembers = [
  {
    name: "Muhammad Ali",
    role: "CEO & Business Development Manager",
    image: img3,
    linkedin: "https://www.linkedin.com/in/talibji/",
    description: "Visionary leader with 7+ years of experience in driving business growth and building high-performing remote teams. Expert in crafting winning strategies for project acquisition and long-term client relationships.",
  },
  {
    name: "Abrar",
    role: "Senior Business Executive & Web Developer",
    image: img1,
    description: "Combines strong business acumen with exceptional web development skills to deliver tailored digital solutions. Skilled in managing client relationships while building functional, scalable websites.",
  },
  {
    name: "Sarah",
    role: "Senior Upwork Bidder, Artist & Graphic Designer",
    image: img4,
    description: "A creative professional who blends business expertise with artistic vision. Specializes in crafting compelling proposals and delivering stunning visual designs.",
  },
  {
    name: "Hasan",
    role: "Senior Upwork Bidder & Marketing Head",
    image: img2,
    description: "Strategic thinker with a flair for persuasive communication and client engagement. Leads marketing initiatives that amplify brand reach and conversion rates.",
  },
  {
    name: "Shafaq",
    role: "Business Developer & Sales Head",
    image: img5,
    description: "Results-driven professional focused on generating high-value leads and closing impactful deals. Expert in aligning sales strategies with business goals for maximum growth.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Expert Team</h2>
          <p className="text-xl text-muted-foreground">Meet the professionals driving your success</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 shadow-md hover:shadow-elegant transition-smooth group">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-32 h-32 border-4 border-primary/10 group-hover:border-primary/30 transition-smooth">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-3">{member.role}</p>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary-glow transition-smooth text-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>Connect</span>
                    </a>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;