import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "The Purpose of the Communication Management Plan",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQF--fsVJc79iQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1737373813809?e=1760572800&v=beta&t=xXALcOxijNedNASTIijS20MNiix1cIWlIRtRmJzzKG8",
    excerpt: "Working in a waterfall or predictive project management environment, I've encountered countless planning documents. Yet, amidst all these structured processes, I found myself struggling with one of the most critical aspects of project success: communication.",
    url: "https://www.linkedin.com/pulse/purpose-communication-management-plan-muhammad-ali-eqqdf",
    date: "January 2025",
  },
  {
    title: "Ethical Strategies for Obtaining Reviews on Upwork",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGtHQLlx0djRw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683810386084?e=1760572800&v=beta&t=1wRgdwlRxzDROoG2WpGOghc1-dTaEiyt39djxp6S6qE",
    excerpt: "As a freelancer on Upwork, winning contracts and closing leads can be challenging, especially for those with fresh profiles. While there are various factors that play a crucial role in gaining a client's trust, the most significant factor is reviews.",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7062413454795505664/",
    date: "May 2023",
  },
  {
    title: "Building Trust in Remote Teams",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    excerpt: "Discover how effective communication and strategic planning can transform remote team dynamics and drive project success in distributed work environments.",
    url: "#",
    date: "Coming Soon",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Latest Insights</h2>
          <p className="text-xl text-muted-foreground">Learn from our experience in business development and lead generation</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-elegant transition-smooth group">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-smooth">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary group-hover:text-primary-glow"
                  asChild
                >
                  <a 
                    href={blog.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
