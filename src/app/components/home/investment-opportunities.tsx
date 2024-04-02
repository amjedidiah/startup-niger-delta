import Image from "next/image";
import investmentIllustration from "../../../../public/images/investment-illustration.png";
import OpportunityCard from "@/components/home/opportunity-card";

const investmentOpportunities = [
  {
    name: "startups",
    title: "Startups",
    content:
      "You are a holder or repository of a product or process in digital technology or the owner/author of registered software.",
  },
  {
    name: "money",
    title: "Angel Investors",
    content:
      "You are a holder or repository of a product or process in digital technology or the owner/author of registered software.",
  },
  {
    name: "briefcase",
    title: "Venture Capitalists",
    content:
      "You are a holder or repository of a product or process in digital technology or the owner/author of registered software.",
  },
  {
    name: "hub",
    title: "Accelerators, Innovation Hubs, Incubators & more",
    content:
      "You are a holder or repository of a product or process in digital technology or the owner/author of registered software.",
  },
];

export default function InvestmentOpportunities() {
  return (
    <section className="py-10 lg:pb-0 bg-[url('/images/bg-investment.png')] bg-no-repeat bg-cover bg-center text-white">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-32 xl:gap-[106px]">
        <div className="flex flex-col gap-[46px]">
          <h2 className="max-w-[371px] relative after:absolute after:left-0 after:-bottom-5 after:w-[115px] after:h-[6px] after:bg-laurel-green-100">
            Investment & Opportunities.
          </h2>
          <p className="lg:max-w-[604px] lg:text-lg">
            Join our exclusive network of a thriving community of digital
            technology pioneers, explore investment opportunities, and stay at
            the cutting edge of technological advancements.
          </p>
        </div>
        <div>
          <Image
            src={investmentIllustration}
            alt="Investment Opportunities"
            className="lg:mb-8 max-lg:w-4/5 max-lg:max-w-[467px] xl:max-w-[520px] mx-auto"
          />
        </div>
        <div className="max-lg:flex flex-wrap max-lg:justify-center gap-4 md:gap-6 xl:gap-11 lg:grid lg:grid-cols-4 lg:col-span-2 lg:items-end lg:-mt-[66px] [&>div]:rounded-t-[24px] max-[390px]:[&>div:nth-last-child(n+3)_p:nth-child(2)]:min-h-[32px] max-[431px]:[&>div:nth-child(n+3)_p:nth-child(2)]:min-h-[80px] min-[432px]:max-[466px]:[&>div:nth-child(n+3)_p:nth-child(2)]:min-h-[64px] min-[467px]:max-[560px]:[&>div:nth-child(n+3)_p:nth-child(2)]:min-h-[48px] min-[577px]:max-lg:[&>div:nth-child(n+3)_p:nth-child(2)]:min-h-[32px] lg:[&>div_p:nth-child(2)]:min-h-[84px] sm:[&>div:nth-child(n+3)]:rounded-b-none lg:[&>div:nth-child(n)]:rounded-b-none">
          {investmentOpportunities.map((item) => (
            <OpportunityCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
