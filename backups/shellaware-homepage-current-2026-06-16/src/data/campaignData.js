import { Bot, FishOff, HandHeart, Megaphone, Recycle, ShieldCheck, ThermometerSun, Trash2, Waves } from "lucide-react";

export const campaignImages = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20turtle%20swimming%20over%20coral%20reefs%20in%20Kona.jpg?width=2200",
  turtlePortrait: "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Sea%20Turtle%20swimming.jpg?width=1400",
  habitat: "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Sea%20turtle%20swimming%20by.jpg?width=1600",
  plastic: "https://commons.wikimedia.org/wiki/Special:FilePath/Entangled%20green%20sea%20turtle%20%287656597150%29.jpg?width=1600",
  fishing: "https://commons.wikimedia.org/wiki/Special:FilePath/Sea%20turtle%20entangled%20in%20a%20ghost%20net.jpg?width=1600",
  nesting: "https://commons.wikimedia.org/wiki/Special:FilePath/Chelonia%20mydas%20green%20sea%20turtle%202.jpg?width=1600",
  action: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1800&q=86",
  ocean: "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Turtle%20taking%20a%20breath.jpg?width=2200"
};

export const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Threats", href: "#threats" },
  { label: "Take Action", href: "#take-action" },
  { label: "Insights", href: "#insights" }
];

export const missionPoints = [
  {
    value: "SDG 14",
    label: "Life Below Water",
    copy: "ShellAware connects sea turtle conservation with public education and everyday ocean responsibility."
  },
  {
    value: "1 ocean",
    label: "Connected systems",
    copy: "Turtles move through reefs, seagrass beds, open water, and nesting beaches that all depend on care."
  },
  {
    value: "Public action",
    label: "Visible habits",
    copy: "Awareness becomes useful when people repeat practical choices in schools, beaches, and communities."
  }
];

export const threats = [
  {
    icon: Trash2,
    title: "Plastic pollution",
    copy: "Plastic bags, wrappers, and fragments can travel from land to sea and be mistaken for food.",
    image: campaignImages.plastic
  },
  {
    icon: FishOff,
    title: "Accidental bycatch",
    copy: "Turtles may become trapped in fishing gear while moving through feeding and migration areas.",
    image: campaignImages.fishing
  },
  {
    icon: Waves,
    title: "Habitat disturbance",
    copy: "Nesting beaches can be affected by coastal activity, bright lighting, and disturbance near nests.",
    image: campaignImages.nesting
  },
  {
    icon: ThermometerSun,
    title: "Climate stress",
    copy: "Heat, erosion, and changing ocean conditions can affect nesting success and turtle survival.",
    image: campaignImages.ocean
  }
];

export const publicActions = [
  {
    icon: Recycle,
    title: "Reduce single-use plastic",
    copy: "Carry a reusable bottle, bag, and container so less waste can reach waterways."
  },
  {
    icon: Waves,
    title: "Keep beaches clean",
    copy: "Take rubbish with you, join cleanups, and remove small pieces that wildlife can encounter."
  },
  {
    icon: ShieldCheck,
    title: "Respect nesting areas",
    copy: "Keep distance from turtles, nests, and hatchlings. Follow local conservation guidance."
  },
  {
    icon: Megaphone,
    title: "Share reliable awareness",
    copy: "Use class projects, social posts, and conversations to spread accurate conservation messages."
  }
];

export const expertInsight = {
  quote:
    "Public awareness becomes more meaningful when people understand how everyday behaviour connects to the survival of marine life.",
  name: "Marine Conservation Researcher",
  role: "Sea Turtle Habitat and Nesting Awareness"
};

export const shellyMessages = [
  { from: "bot", text: "I can help explain turtle threats and simple conservation actions." },
  { from: "user", text: "What should someone do first?" },
  { from: "bot", text: "Start with visible habits: reduce plastic, keep beaches clean, and share reliable awareness." }
];

export const campaignPillars = [
  { icon: HandHeart, label: "Conservation awareness" },
  { icon: Waves, label: "Ocean education" },
  { icon: Bot, label: "Shelly preview only" }
];
