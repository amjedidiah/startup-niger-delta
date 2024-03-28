import OrangeButton from "@/components/shared/orange-button";
import {
  SNDHelp,
  SNDResources1,
  SNDResources2,
  SNDResources3,
  SNDResources4,
  SNDResources5,
} from "@/lib/icons";

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
    <section className="py-10 lg:pt-[71px] lg:pb-[197px] bg-[url('/images/bg-investment.png')] bg-no-repeat bg-cover bg-center text-white">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-[50px]">
        <div className="flex flex-col gap-[46px] lg:gap-[73px]">
          <h2 className="relative after:absolute after:left-0 after:-bottom-4 after:w-[115px] after:h-[6px] after:bg-laurel-green-100">
            Resources.
          </h2>
          <p className="lg:max-w-[604px] text-lg lg:mt-[18px]">
            SNG is proud to offer such a wide variety of technology assets
            within the geographical locations on its platform. All these
            encompass our goal of turbo-charging investments towards
            sustainable, innovative and most importantly inclusive growth.
          </p>
          <OrangeButton className="w-fit">Get Started</OrangeButton>
        </div>
        <div className="flex flex-col gap-[10px] lg:relative lg:top-20">
          {resources.map(({ title, Icon, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl flex items-center justify-between p-4 gap-7"
            >
              <span className="w-16 h-16 rounded-full bg-laurel-green-300 inline-flex items-center justify-center">
                <Icon />
              </span>
              <div className="flex flex-col text-black font-inter flex-1">
                <p className="text-xl leading-[30px]">{title}</p>
                <p className="text-lg font-normal leading-[28px]">
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
