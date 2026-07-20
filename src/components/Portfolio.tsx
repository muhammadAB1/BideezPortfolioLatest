import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Briefcase, Megaphone } from "lucide-react";
import img1 from "../images/Hassan SS.png";
import img2 from "../images/Usman.png";
import img3 from "../images/GaiyoorUpwork.jpg";
import img4 from "../images/AkashaUpwork.png";
import img5 from "../images/muaqib.png";
import img6 from "../images/shahriyar.png";
import ads82k from "../images/82kdallarppc.png";
import ads127k from "../images/127kdallarppc.png";
import ads249k from "../images/249kdallarppc.png";
import ads827k from "../images/827kdallarppc.png";
import ads1000leads from "../images/1000leads.png";
import adsMillion from "../images/milliondallarppc.png";

const upworkStories = [
  {
    name: "Syed Hassan",
    role: "Amazon PPC Manager",
    image: img1,
    achievements: [
      "$100K+ total earnings",
      "Top Rated Plus with 100% Job Success",
      "11,000+ hours worked",
      "Trusted long-term client base",
    ],
  },
  {
    name: "Usman",
    role: "Salesforce",
    image: img2,
    achievements: [
      "$100K+ total earnings",
      "Top Rated Plus with 100% Job Success",
      "8,000+ hours worked",
      "Trusted long-term client base",
    ],
  },
  {
    name: "Syed Gaiyoor H.",
    role: "Google Ads Specialist",
    image: img3,
    achievements: [
      "$20K+ in earnings",
      "93% Job Success & Top Rated Badge",
      "33 successful jobs with 25+ clients",
      "$300K+ PPC spend & $1M+ client revenue",
    ],
  },
  {
    name: "Akasha Y.",
    role: "Brand Identity & Logo Design",
    image: img4,
    achievements: [
      "$70K+ in Total Earnings",
      "95% Job Success Score & Top Rated Badge",
      "400+ Successful Projects",
      "$25/hr Rate Sustained",
    ],
  },
  {
    name: "Shahriyar",
    role: "Graphic & Brand Identity Designer",
    image: img6,
    achievements: [
      "$15K+ earnings in design projects",
      "95%+ Job Success Score",
      "40+ completed projects",
      "Premium design work positioning",
    ],
  },
  {
    name: "Muaqib",
    role: "Full Stack Web Developer",
    image: img5,
    achievements: [
      "$18K+ earnings in web development",
      "97% Job Success Score",
      "45+ successful projects",
      "Long-term and repeat clients",
    ],
  },
];

const adsCampaigns = [
  {
    image: ads82k,
    result: "$17K → $82K · 4.84x ROAS",
    platform: "Meta Ads",
    niche: "BFCM · 4 Days",
  },
  {
    image: ads127k,
    result: "$12K → $127K · 9.87x ROAS",
    platform: "Google Ads",
    niche: "Apparel & Fashion",
  },
  {
    image: ads249k,
    result: "$55K → $249K · 4.50x ROAS",
    platform: "Meta Ads",
    niche: "Apparel & Fashion",
  },
  {
    image: ads827k,
    result: "$338K → $827K · 2.45x ROAS",
    platform: "Google Ads",
    niche: "General Dropshipping",
  },
  {
    image: ads1000leads,
    result: "1,000+ Leads · $26/Lead",
    platform: "Meta Ads",
    niche: "Roofing Service",
  },
  {
    image: adsMillion,
    result: "$1.54M → $4.35M · 2.83x ROAS",
    platform: "Google Ads",
    niche: "Fashion Dropshipping",
  },
];

type Story = (typeof upworkStories)[number];
type AdsCampaign = (typeof adsCampaigns)[number];
type Accent = "success" | "secondary";

const StoryCard = ({ item }: { item: Story }) => (
  <Card className="overflow-hidden shadow-md hover:shadow-elegant transition-smooth group border-t-4 border-t-success">
    <div className="aspect-video relative overflow-hidden bg-muted">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-contain group-hover:scale-105 transition-smooth bg-white"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>

    <div className="p-6 space-y-4">
      <div>
        <h3 className="text-xl font-bold mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground font-medium">{item.role}</p>
      </div>

      <div className="space-y-2">
        {item.achievements.map((achievement, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <TrendingUp className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm text-foreground">{achievement}aaa</span>
          </div>
        ))}
      </div>

      <Badge className="bg-success text-success-foreground">Bideez Success</Badge>
    </div>
  </Card>
);

const AdsCard = ({ item }: { item: AdsCampaign }) => (
  <Card className="overflow-hidden shadow-md hover:shadow-elegant transition-smooth group border-t-4 border-t-secondary">
    <div className="p-3 pb-0">
      <div className="relative overflow-hidden rounded-md bg-muted">
        <img
          src={item.image}
          alt={item.result}
          className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-smooth origin-center"
        />
      </div>
    </div>

    <div className="p-4 flex flex-wrap items-center gap-2 justify-between">
      <div className="min-w-0">
        <p className="font-semibold text-foreground text-sm md:text-base truncate">
          {item.result}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{item.niche}</p>
      </div>
      <Badge className="bg-secondary text-secondary-foreground shrink-0">
        {item.platform}
      </Badge>
    </div>
  </Card>
);

const SectionHeader = ({
  icon: Icon,
  eyebrow,
  title,
  description,
  accent,
}: {
  icon: typeof Briefcase;
  eyebrow: string;
  title: string;
  description: string;
  accent: Accent;
}) => (
  <div className="max-w-3xl mx-auto text-center mb-12">
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-sm font-semibold ${
        accent === "secondary"
          ? "bg-secondary/10 text-secondary"
          : "bg-success/10 text-success"
      }`}
    >
      <Icon className="w-4 h-4" />
      {eyebrow}
    </div>
    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h3>
    <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    <div
      className={`mx-auto mt-6 h-1 w-24 rounded-full ${
        accent === "secondary" ? "bg-secondary" : "bg-success"
      }`}
    />
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Real clients, real results — proven wins across Upwork bidding and paid ad campaigns
          </p>
        </div>

        {/* Part 1 — Upwork Bidding */}
        <SectionHeader
          icon={Briefcase}
          eyebrow="Part 01 — Upwork Bidding"
          title="Winning Careers on Upwork"
          description="How we helped professionals land high-value clients and scale their earnings through expert bidding."
          accent="success"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {upworkStories.map((item, index) => (
            <StoryCard key={`upwork-${index}`} item={item} />
          ))}
        </div>

        {/* Divider between the two parts */}
        <div className="max-w-7xl mx-auto my-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Paid Advertising
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Part 2 — Google & Meta Ads */}
        <SectionHeader
          icon={Megaphone}
          eyebrow="Part 02 — Google & Meta Ads"
          title="Scaling Growth with Paid Ads"
          description="Data-driven Google & Meta ad campaigns that turned ad spend into measurable revenue and qualified leads."
          accent="secondary"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {adsCampaigns.map((item, index) => (
            <AdsCard key={`ads-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
