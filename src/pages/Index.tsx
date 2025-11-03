import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import Portfolio from "@/components/Portfolio";
import CEO from "@/components/CEO";
import Testimonials from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LinkedInFloat from "@/components/LinkedinFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Vision />
      <Portfolio />
      <CEO />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <LinkedInFloat />
    </div>
  );
};

export default Index;
