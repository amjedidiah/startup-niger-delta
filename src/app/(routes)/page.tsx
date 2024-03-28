import HomeHeader from "@/components/home/home-header";
import HomeHero from "@/components/home/home-hero";
import InvestmentOpportunities from "@/components/home/investment-opportunities";
import OurEcosystem from "@/components/home/our-ecosystem";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HomeHeader />
      <main className="pt-[88px]">
        <HomeHero />
        <OurEcosystem />
        <InvestmentOpportunities />
      </main>
    </Fragment>
  );
}
