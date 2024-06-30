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
