import Navigation from "@/components/Navigation";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import LinkedInFloat from "@/components/LinkedinFloat";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
      <LinkedInFloat />
    </div>
  );
};

export default BlogPage;
