import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "Vision", href: "#vision" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const onHero = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scroll styling when leaving home (other pages have light backgrounds)
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 20);
    }
  }, [isHome]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }

    scrollToSection(href);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash;
      requestAnimationFrame(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          className={`mx-auto max-w-6xl rounded-2xl border transition-smooth ${
            onHero
              ? "border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              : "border-border/60 bg-background/95 shadow-md backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 h-16 sm:px-6">
            <button
              onClick={() => handleNavClick("#home")}
              className={`shrink-0 text-xl font-bold tracking-tight transition-smooth ${
                onHero
                  ? "text-white hover:text-white/80"
                  : "text-primary hover:text-primary-glow"
              }`}
            >
              Bideez
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-smooth ${
                    onHero
                      ? "text-white/90 hover:text-white hover:bg-white/15"
                      : "text-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className={`hidden sm:inline-flex transition-smooth ${
                  onHero
                    ? "bg-white text-primary hover:bg-white/90 shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
                onClick={() => handleNavClick("#contact")}
              >
                Get Started
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${
                  onHero
                    ? "text-white hover:bg-white/15 hover:text-white"
                    : "text-foreground hover:bg-primary/10"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-24 left-3 right-3 sm:left-4 sm:right-4 rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
            <div className="flex flex-col gap-1 p-3">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className="justify-start text-base hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={() => handleNavClick("#contact")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
