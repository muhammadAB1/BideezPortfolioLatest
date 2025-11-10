import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Images, Quote } from "lucide-react";
import img1 from "../images/Valentin pic.jpeg";
import img2 from "../images/waqar.jpeg";
import img3 from "../images/Kamran pic.png";
import img4 from "../images/Profile.png";
import img5 from "../images/saad.jpeg";
import img6 from "../images/farheen.jpeg";


const testimonials = [
  {
    name: "Valentin Butiugin",
    role: "Partner | Business leader",
    image: img1,
    text: "Big shoutout to Muhammad Ali and his incredible team for their outstanding support with Upwork bidding services! Their expertise and dedication helped us secure valuable projects. Highly recommend them for anyone seeking top-notch bidding assistance on Upwork!",
    date: "May 15, 2023",
  },
  {
    name: "Waqar Abdul Ghaffar",
    role: "CEO & Founder @TPLEX",
    image: img2,
    text: "Undoubtedly he has a command of writing converting proposals as he has brought several projects to our company. I will recommend Ali for bidding on Upwork because he always comes up with the latest bidding techniques and always updates the proposal format according to his recent research.",
    date: "October 28, 2022",
  },
  {
    name: "Mr Kamran",
    role: "Digital Marketing Expert | Google Ads Specialist",
    image: img3,
    text: "I have got a chance to be trained by Muhammad Ali. The training was on how to win valuable projects on Upwork. Ali has provided me with the golden tips of project selection and cover letter writing. Highly recommend",
    date: "June 26, 2024",
  },
  {
    name: "Nofal Nadeem",
    role: "Founder of CyberBuddies | Managing Director",
    image: img4,
    text: "Muhammad Ali Is Very Polite And Nice Person to Work With He is passionate about his jobs and what he committed To his clients!",
    date: "November 1, 2022",
  },
  {
    name: "Saad Shahid",
    role: ".Net Developer at Wallsoft",
    image: img5,
    text: "such a polite nature and always there for support for his team always maintain a professional environment and worked with him as a freelancer and find him exactly the same in nature.",
    date: "October 27, 2022",
  },
  {
    name: "Farheen Fatima",
    role: "Content Marketing Specialist",
    image: img6,
    text: "Muhammad Ali has always amazed me with his dedication and problem solving skills. He is highly professional in what he does.",
    date: "September 29, 2022",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">Trusted by professionals and businesses worldwide</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-md hover:shadow-elegant transition-smooth relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
              
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-16 h-16 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-xs text-muted-foreground leading-snug">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </div>
              
              <p className="text-sm text-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;