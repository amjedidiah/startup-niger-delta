import { UserTypes } from "@/lib/types";

export const currentYear = new Date().getFullYear();

export const eventNavItems = ["upcoming", "past"];

export const userSteps = {
  [UserTypes.StartUp]: [
    "Company Profile",
    "Contact Info",
    "Founder/Co-founder Profile",
    "Founder's Identification",
    "Review",
  ],
  [UserTypes.AngelInvestor]: [
    "Company Profile",
    "Contact Info",
    "Investment Info",
    "Identification",
    "Review",
  ],
  [UserTypes.VentureCapitalist]: [
    "Company Profile",
    "Contact Info",
    "Investment Info",
    "Identification",
    "Review",
  ],
  [UserTypes.Others]: [
    "Company Profile",
    "Contact Info",
    "Incubator's Info",
    "Identification",
    "Review",
  ],
};

export const INIT_ONBOARDING_STEP_INDEX = 1;

export const resources = [
  {
    slug: "startup-development-1",
    title: "Tech Pioneer Network",
    description: "Connect with digital innovators.",
    info: "Join a vibrant community of trailblazers in digital technology, where ideas thrive, investments flourish, and the future is being shaped every day",
  },
  {
    slug: "startup-development-2",
    title: "Investment Hub",
    description: "Discover promising opportunities.",
    info: " Explore exclusive investment opportunities in cutting-edge startups and emerging technologies, guided by insights from industry leaders and experts",
  },
  {
    slug: "startup-development-3",
    title: "Innovation Playground",
    description: "Where ideas become reality",
    info: "Dive into a playground of innovation, where breakthrough ideas are nurtured, developed, and transformed into tomorrow's digital solutions.",
  },
  {
    slug: "startup-development-4",
    title: "Tech Trends Tracker",
    description: "Stay ahead of the curve.",
    info: "Keep pace with the latest technological advancements and trends shaping industries worldwide, ensuring you're always at the forefront of innovation.",
  },
  {
    slug: "startup-development-5",
    title: "Community of Visionaries",
    description: "Connect, collaborate, innovate.",
    info: "Engage with a dynamic community of digital visionaries, collaborate on groundbreaking projects, and drive forward the future of technology together.",
  },
];

export const defaultInputRules = { required: true };

export const emailRules = {
  ...defaultInputRules,
  validate: (value: string) =>
    Boolean(
      String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) || "Invalid email address",
};

export const DEFAULT_ERROR_STATUS_CODE = 500;

export const maxFileSize = 1024 * 1024 * 1;

const isProd = process.env.NODE_ENV === "production";

export const isDev = !isProd;