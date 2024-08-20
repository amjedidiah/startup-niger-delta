import { CompanyTypes } from "@/lib/types";

export const currentYear = new Date().getFullYear();

export const eventNavItems = ["upcoming", "past"];

export const userSteps = {
  [CompanyTypes.StartUp]: [
    "Company Profile",
    "Contact Info",
    "Founder/Co-founder Profile",
    "Founder's Identification",
    "Review",
  ],
  [CompanyTypes.AngelInvestor]: [
    "Company Profile",
    "Contact Info",
    "Investment Info",
    "Identification",
    "Review",
  ],
  [CompanyTypes.VentureCapitalist]: [
    "Company Profile",
    "Contact Info",
    "Investment Info",
    "Identification",
    "Review",
  ],
  [CompanyTypes.Others]: [
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

export const baseUrl =
  process.env.NEXTAUTH_URL || "https://" + process.env.VERCEL_BRANCH_URL;

export const industryOptions = [
  {
    value: "fintech",
    label: "Fintech",
  },
  {
    value: "ai",
    label: "Artificial Intelligence (AI)",
  },
  {
    value: "saas",
    label: "Software as a Service (SaaS)",
  },
  {
    value: "health-tech",
    label: "Health Tech",
  },
  {
    value: "e-commerce",
    label: "E-commerce",
  },
  {
    value: "cybersecurity",
    label: "Cybersecurity",
  },
  {
    value: "blockchain",
    label: "Blockchain",
  },
  {
    value: "iot",
    label: "Internet of Things (IoT)",
  },
  {
    value: "ed-tech",
    label: "EdTech",
  },
  {
    value: "clean-tech",
    label: "CleanTech",
  },
  {
    value: "biotech",
    label: "Biotech",
  },
  {
    value: "ar-vr",
    label: "Augmented Reality (AR) / Virtual Reality (VR)",
  },
  {
    value: "agri-tech",
    label: "AgriTech",
  },
  {
    value: "robotics",
    label: "Robotics",
  },
  {
    value: "gaming",
    label: "Gaming",
  },
  {
    value: "others",
    label: "Others",
  },
];

export const fundingInterestOptions = [
  { value: "seed-funding", label: "Seed Funding" },
  { value: "venture-capital", label: "Venture Capital (VC)" },
  { value: "angel-investors", label: "Angel Investors" },
  { value: "series-funding", label: "Series A, B, C Funding" },
  { value: "crowd-funding", label: "Crowdfunding" },
  {
    value: "accelerators-incubators",
    label: "Accelerators and Incubators",
  },
  {
    value: "corporate-venture-capital",
    label: "Corporate Venture Capital (CVC)",
  },
  { value: "debt-financing", label: "Debt Financing" },
  { value: "government", label: "Government Grants and Subsidies" },
];
