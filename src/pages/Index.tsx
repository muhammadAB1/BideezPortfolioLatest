import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import CEO from "@/components/CEO";
import Testimonials from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LinkedInFloat from "@/components/LinkedinFloat";
// import Training from "@/components/Training";

const Index = () => {
  return (
		<div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Impact />
      <Team />
      <Vision />
      <CEO />
      <Testimonials />
      {/* <Training /> */}
      <Contact />
      <Footer />
      <LinkedInFloat />
    </div>
  );
};

export default Index;
