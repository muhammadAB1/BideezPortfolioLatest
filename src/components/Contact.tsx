import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">Ready to boost your project acquisition? Let's talk!</p>
        </div>
        
        <div className="grid md:grid-cols-[1fr,400px] gap-8 max-w-6xl mx-auto">
          <Card className="p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  placeholder="John Doe" 
                  required 
                  className="transition-smooth focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="transition-smooth focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="Project Inquiry" 
                  required 
                  className="transition-smooth focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Tell us about your needs..." 
                  rows={6} 
                  required 
                  className="transition-smooth focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>
          
          <div className="space-y-6">
            <Card className="p-6 shadow-md hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <a 
                    href="mailto:sales@bideez.in" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    sales@bideez.in
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-md hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <a 
                    href="tel:+923333481657" 
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    +92 333 3481657
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-md hover:shadow-elegant transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Connect on LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/company/bideez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Bideez Company Page
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-primary text-primary-foreground shadow-md">
              <h3 className="font-bold text-lg mb-2">Business Hours</h3>
              <p className="text-sm opacity-90">
                Monday - Friday: 9:00 AM - 6:00 PM (PKT)<br />
                Saturday: 10:00 AM - 4:00 PM (PKT)<br />
                Sunday: Closed
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;