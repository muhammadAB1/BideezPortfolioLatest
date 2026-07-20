import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import LinkedInFloat from "@/components/LinkedinFloat";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
      <LinkedInFloat />
    </div>
  );
};

export default PortfolioPage;
