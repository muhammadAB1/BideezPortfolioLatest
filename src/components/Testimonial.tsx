import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Valentin Butiugin",
    role: "Partner | Business leader",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHPjZh-hFgW5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685880858073?e=1757548800&v=beta&t=IYa8NhMvO3vAuOX0oNkCNYQd6MFGQQ82k7ckbJt7E0o",
    text: "Big shoutout to Muhammad Ali and his incredible team for their outstanding support with Upwork bidding services! Their expertise and dedication helped us secure valuable projects. Highly recommend them for anyone seeking top-notch bidding assistance on Upwork!",
    date: "May 15, 2023",
  },
  {
    name: "Waqar Abdul Ghaffar",
    role: "CEO & Founder @TPLEX",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHrm-Q64Yblyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730386315044?e=1757548800&v=beta&t=ZH8oiU8rS-31XA63RkX3YG0kJAxhezvPVvXWbqu9CR8",
    text: "Undoubtedly he has a command of writing converting proposals as he has brought several projects to our company. I will recommend Ali for bidding on Upwork because he always comes up with the latest bidding techniques and always updates the proposal format according to his recent research.",
    date: "October 28, 2022",
  },
  {
    name: "Mr Kamran",
    role: "Digital Marketing Expert | Google Ads Specialist",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEor58K3xFeRA/profile-framedphoto-shrink_800_800/B4DZYXW1csHwAs-/0/1744148584668?e=1755529200&v=beta&t=vbzswVW5bQOsxty-nhdXNnB0Or-zggGg9YTg3m-udaM",
    text: "I have got a chance to be trained by Muhammad Ali. The training was on how to win valuable projects on Upwork. Ali has provided me with the golden tips of project selection and cover letter writing. Highly recommend",
    date: "June 26, 2024",
  },
  {
    name: "Nofal Nadeem",
    role: "Founder of CyberBuddies | Managing Director",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGBl6pt-SkEuQ/profile-displayphoto-shrink_800_800/B4DZee_8jiHAAc-/0/1750719253891?e=1757548800&v=beta&t=V1QtDGlyu7dIoNi3y06Lcrd8dwNa8y3GpH-FUizvkdY",
    text: "Muhammad Ali Is Very Polite And Nice Person to Work With He is passionate about his jobs and what he committed To his clients!",
    date: "November 1, 2022",
  },
  {
    name: "Saad Shahid",
    role: ".Net Developer at Wallsoft",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQF7xZZeK2VodA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671974463363?e=1757548800&v=beta&t=uDtBoMoB0GgbMpitPnoA5X6JYxqYp8jN1Kq-Vl_HBEA",
    text: "such a polite nature and always there for support for his team always maintain a professional environment and worked with him as a freelancer and find him exactly the same in nature.",
    date: "October 27, 2022",
  },
  {
    name: "Farheen Fatima",
    role: "Content Marketing Specialist",
    image: "https://media.licdn.com/dms/image/v2/C5103AQH8iWQsAJMh-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1535544223593?e=1757548800&v=beta&t=07-y6-tPrDLQ0g6NZETuvkhoJfCwnsvx1EedVokdtjc",
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