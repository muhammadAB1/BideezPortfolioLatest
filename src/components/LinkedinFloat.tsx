import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const LinkedInFloat = () => {
  return (
    <a
      href="https://www.linkedin.com/company/bideez"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-elegant hover:shadow-glow transition-smooth bg-primary hover:bg-primary-glow"
      >
        <Linkedin className="h-6 w-6" />
        <span className="sr-only">Connect on LinkedIn</span>
      </Button>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-card px-3 py-1 rounded-md shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap">
        Follow us on LinkedIn
      </span>
    </a>
  );
};

export default LinkedInFloat;
