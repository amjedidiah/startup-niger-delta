import Events from "@/components/home/events/events";
import FAQ from "@/components/home/faq/faq";
import Footer from "@/components/home/footer";
import FundingAlerts from "@/components/home/funding-alerts/funding-alerts";
import HomeHeader from "@/components/home/home-header/home-header";
import HomeHero from "@/components/home/home-hero";
import InvestmentOpportunities from "@/components/home/investment-opportunities/investment-opportunities";
import OurEcosystem from "@/components/home/our-ecosystem/our-ecosystem";
import Partners from "@/components/home/partners";
import RecentNews from "@/components/home/recent-news/recent-news";
import Resources from "@/components/home/resources";
import Testimonies from "@/components/home/testimonies/testimonies";
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
        <Testimonies />
        <RecentNews />
        <Events />
        <FAQ />
        <Footer />
      </main>
    </Fragment>
  );
}
