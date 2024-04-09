import FundingAlerts from "@/components/home/funding-alerts";
import HomeHeader from "@/components/home/home-header";
import HomeHero from "@/components/home/home-hero";
import InvestmentOpportunities from "@/components/home/investment-opportunities";
import OurEcosystem from "@/components/home/our-ecosystem";
import Partners from "@/components/home/partners";
import Resources from "@/components/home/resources";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HomeHeader />
      <main className="pt-[88px]">
        <HomeHero />
        <OurEcosystem />
        <InvestmentOpportunities />
        <Partners />
        <Resources />
        <FundingAlerts />
      </main>
    </Fragment>
  );
}
