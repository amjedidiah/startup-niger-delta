import OrangeButton from "@/components/shared/orange-button";
import {
  SNDHelp,
  SNDResources1,
  SNDResources2,
  SNDResources3,
  SNDResources4,
  SNDResources5,
} from "@/lib/icons";
import Link from "next/link";

const resources = [
  {
    Icon: SNDResources1,
    title: "Startup Development",
    description: "Alert you are my greatest deal",
  },
  {
    Icon: SNDResources2,
    title: "Registration of Startups",
    description: "Alert you are my greatest deal",
  },
  {
    Icon: SNDResources3,
    title: "Startup Development",
    description: "Alert you are my greatest deal",
  },
  {
    Icon: SNDResources4,
    title: "Startup Development",
    description: "Alert you are my greatest deal",
  },
  {
    Icon: SNDResources5,
    title: "Startup Development",
    description: "Alert you are my greatest deal",
  },
];

export default function Resources() {
  return (
    <section className="py-10 lg:pt-12 lg:pb-[71px] bg-green-pattern">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-[50px]">
        <div className="flex flex-col gap-8 lg:gap-14">
          <h2 className="after:left-0 after:-bottom-4 after:bg-laurel-green-100">
            Resources.
          </h2>
          <p className="lg:max-w-[604px] lg:text-lg lg:mt-[18px]">
            NDS is proud to offer such a wide variety of technology assets
            within the geographical locations on its platform. All these
            encompass our goal of turbo-charging investments towards
            sustainable, innovative and most importantly inclusive growth.
          </p>
          <div className="inline-flex">
            <Link href="/signup">
              <OrangeButton className="w-fit">Get Started</OrangeButton>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          {resources.map(({ title, Icon, description }) => (
            <div
              key={title}
              className="sm:bg-white rounded-xl flex items-center justify-between py-2 px-4 lg:py-4 gap-4 lg:gap-7"
            >
              <span className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-laurel-green-300 inline-flex items-center justify-center">
                <Icon />
              </span>
              <div className="flex flex-col sm:text-black font-inter flex-1">
                <p className="text-lg lg:text-xl lg:leading-[30px]">{title}</p>
                <p className="lg:text-lg font-normal lg:leading-[28px]">
                  {description}
                </p>
              </div>
              <span>
                <SNDHelp />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
