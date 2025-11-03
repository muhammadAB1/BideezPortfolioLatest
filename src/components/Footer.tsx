import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Bideez</h3>
            <p className="text-muted-foreground leading-relaxed">
              Smart bidding and lead generation services specializing in Upwork and LinkedIn. Building lasting opportunities since 2018.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth">About Us</a>
              <a href="#team" className="block text-muted-foreground hover:text-primary transition-smooth">Our Team</a>
              <a href="#portfolio" className="block text-muted-foreground hover:text-primary transition-smooth">Success Stories</a>
              <a href="#blog" className="block text-muted-foreground hover:text-primary transition-smooth">Blog</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="mailto:sales@bideez.in" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>sales@bideez.in</span>
              </a>
              <a 
                href="tel:+923333481657" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>+92 333 3481657</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/bideez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Company Page</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Bideez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
