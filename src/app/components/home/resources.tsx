import OrangeButton from "@/components/shared/orange-button";
import Link from "next/link";
import Resource from "@/components/home/resource";
import { resources } from "@/lib/constants";

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
        <div className="flex flex-col gap-[10px] xl:gap-4">
          {resources.map((item, i) => (
            <Resource key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
