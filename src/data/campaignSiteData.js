import {
  Bot,
  ChevronRight,
  FishOff,
  HandHeart,
  Lightbulb,
  Megaphone,
  Recycle,
  ShieldCheck,
  ThermometerSun,
  Trash2,
  Waves
} from "lucide-react";

export const instagramUrl = "https://www.instagram.com/shellawareapu/?utm_source=ig_web_button_share_sheet";

export const routes = [
  { id: "home", label: "Home", path: "/" },
  { id: "journey", label: "Journey", path: "/journey" },
  { id: "threats", label: "Threats", path: "/threats" },
  { id: "actions", label: "Actions", path: "/actions" },
  { id: "expert", label: "Experts", path: "/expert" },
  { id: "shelly", label: "Shelly", path: "/shelly" },
  { id: "campaign", label: "Campaign", path: "/campaign" }
];

export const routeMap = Object.fromEntries(routes.map((route) => [route.path, route]));

export const images = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20turtle%20swimming%20over%20coral%20reefs%20in%20Kona.jpg?width=2200",
  turtle: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Green_Sea_Turtle%2C_Maui.jpg",
  habitat: "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Sea%20turtle%20swimming%20by.jpg?width=1800",
  plastic: "https://images.squarespace-cdn.com/content/v1/5b80290bee1759a50e3a86b3/1623768698900-7U9KIM71DW2EAF3FMXUK/sea-turtle-with-plastic-ben-j-hicks.jpg",
  fishing: "https://upload.wikimedia.org/wikipedia/commons/6/67/Sea_turtle_caught_in_fishing_line.png",
  nesting: "https://commons.wikimedia.org/wiki/Special:FilePath/Green%20Sea%20turtle%20swimming%20by.jpg?width=1800",
  action: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1800&q=86",
  surface: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Green_Sea_Turtle%2C_Maui.jpg"
};

export const homePanels = [
  {
    eyebrow: "Follow the route",
    title: "A sea turtle crosses connected habitats.",
    copy: "Move from reef to current to coast and see how public behaviour follows the turtle into the water.",
    path: "/journey",
    image: images.habitat,
    icon: Waves
  },
  {
    eyebrow: "Decode pressure",
    title: "Threats are introduced as interruptions.",
    copy: "Plastic, fishing gear, light, and warming shorelines are shown as specific pressures, not random facts.",
    path: "/threats",
    image: images.fishing,
    icon: FishOff
  },
  {
    eyebrow: "Act with clarity",
    title: "Turn awareness into public action.",
    copy: "Build a personal action pledge and see how small choices become part of the campaign.",
    path: "/actions",
    image: images.action,
    icon: HandHeart
  }
];

export const journeyStops = [
  {
    id: "reef",
    depth: "Sunlit reef",
    title: "The turtle enters a living map.",
    copy: "Reefs, seagrass beds, and open water connect feeding, shelter, migration, and nesting behaviour.",
    image: images.hero
  },
  {
    id: "current",
    depth: "Open current",
    title: "The route carries more than food.",
    copy: "Currents move nutrients and life, but they can also move waste from streets, rivers, and coastlines.",
    image: images.habitat
  },
  {
    id: "surface",
    depth: "Breathing line",
    title: "Every surfacing is a reminder.",
    copy: "Turtles need safe water, safer beaches, and public choices that reduce pressure across the whole route.",
    image: images.surface
  }
];

export const threats = [
  {
    id: "plastic",
    icon: Trash2,
    label: "Waste current",
    title: "Plastic pollution",
    copy: "Bags, wrappers, and fragments can drift from land into waterways and be mistaken for food.",
    response: "Carry reusables, avoid single-use plastic, and stop waste before it reaches drains or beaches.",
    image: images.plastic
  },
  {
    id: "bycatch",
    icon: FishOff,
    label: "Fishing pressure",
    title: "Accidental bycatch",
    copy: "Turtles can become trapped in fishing gear while moving through migration and feeding zones.",
    response: "Support responsible seafood choices and public awareness of safer fishing practices.",
    image: images.fishing
  },
  {
    id: "nesting",
    icon: Lightbulb,
    label: "Coastal light",
    title: "Nesting disturbance",
    copy: "Bright light, noise, and careless beach activity can disrupt nesting turtles and hatchlings.",
    response: "Keep nesting beaches dark, quiet, clean, and respectful.",
    image: images.nesting
  },
  {
    id: "climate",
    icon: ThermometerSun,
    label: "Warming waters",
    title: "Heat and erosion",
    copy: "Temperature shifts and coastal erosion can affect hatchlings, beaches, and long-term survival.",
    response: "Share climate-aware conservation messages and support coastal habitat protection.",
    image: images.surface
  }
];

export const actions = [
  {
    id: "reusables",
    icon: Recycle,
    title: "Carry reusables",
    copy: "Cut single-use plastic before it has a chance to enter waterways."
  },
  {
    id: "coast",
    icon: Waves,
    title: "Clean the coast",
    copy: "Remove small waste pieces from beaches, drains, and public spaces."
  },
  {
    id: "nesting",
    icon: ShieldCheck,
    title: "Respect nesting space",
    copy: "Keep distance, lower lights, and follow local wildlife guidance."
  },
  {
    id: "share",
    icon: Megaphone,
    title: "Share ShellAware",
    copy: "Turn accurate turtle facts into public conversations and campaign posts."
  }
];

export const expertInsight = {
  quote:
    "Public awareness becomes meaningful when people see how daily behaviour connects to the survival of marine life.",
  name: "Marine Conservation Researcher",
  role: "Sea Turtle Habitat and Nesting Awareness",
  points: [
    "Turtle protection depends on both habitat care and public behaviour.",
    "Awareness should connect land habits to ocean consequences.",
    "Campaigns work best when people can repeat one clear action."
  ]
};

export const shellyPrompts = [
  {
    id: "plastic",
    question: "Why does plastic confuse turtles?",
    answer:
      "Floating plastic can resemble prey and carry food-like smells. The best response starts before waste reaches water."
  },
  {
    id: "lights",
    question: "Why do beach lights matter?",
    answer:
      "Hatchlings orient toward natural ocean light. Bright coastal lighting can pull them away from the sea."
  },
  {
    id: "first-step",
    question: "What can I do this week?",
    answer:
      "Choose one repeatable habit: carry reusables, keep a beach or drain clean, and share accurate turtle conservation messages."
  }
];

export const ctaLinks = [
  { label: "Explore Journey", path: "/journey", icon: ChevronRight },
  { label: "Build Action Pledge", path: "/actions", icon: HandHeart },
  { label: "Preview Shelly", path: "/shelly", icon: Bot }
];
