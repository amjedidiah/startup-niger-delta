import { UserTypes } from "@/lib/types";

export const currentYear = new Date().getFullYear();

export const eventNavItems = ["upcoming", "past"];

export const userSteps = {
  [UserTypes.StartUp]: [
    { title: "Company Profile", Component: () => null },
    { title: "Contact Info", Component: () => null },
    { title: "Founder/Co-founder Profile", Component: () => null },
    { title: "Founder's Identification", Component: () => null },
  ],
  [UserTypes.AngelInvestor]: [
    { title: "Company Profile", Component: () => null },
    { title: "Contact Info", Component: () => null },
    { title: "Investment Info", Component: () => null },
    { title: "Identification", Component: () => null },
  ],
  [UserTypes.VentureCapitalist]: [
    { title: "Company Profile", Component: () => null },
    { title: "Contact Info", Component: () => null },
    { title: "Investment Info", Component: () => null },
    { title: "Identification", Component: () => null },
  ],
  [UserTypes.Others]: [
    { title: "Company Profile", Component: () => null },
    { title: "Contact Info", Component: () => null },
    { title: "Incubator's Info", Component: () => null },
    { title: "Identification", Component: () => null },
  ],
};

export const INIT_ONBOARDING_STEP_INDEX = 1;
