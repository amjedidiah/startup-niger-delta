import Image from "next/image";
import startups from "../../../../public/images/startups.png";
import money from "../../../../public/images/money.png";
import briefcase from "../../../../public/images/briefcase.png";
import hub from "../../../../public/images/hub.png";
import { useMemo } from "react";

type Props = {
  name: string;
  title: string;
  content: string;
};

export default function OpportunityCard({ name, title, content }: Props) {
  const imageSrc = useMemo(
    () => ({ startups, money, briefcase }[name] || hub),
    [name]
  );

  return (
    <div className="max-w-[320px] max-lg:basis-[calc((100%-32px)/2)] px-4 xl:px-6 py-8 xl:pt-14 flex flex-col gap-6 md:gap-8 bg-laurel-green-200 last:rounded-b-none lg:mt-[96px] lg:min-h-[225px] xl:min-h-[250px] cursor-pointer group lg:hover:-mt-[66px] lg:hover:pt-12 lg:hover:bg-shade-of-amber max-lg:border-b-4 max-lg:border-shade-of-amber lg:hover:gap-4">
      <Image src={imageSrc} alt={title} className="max-lg:w-9 lg:h-[60px]" />
      <p className="text-lg lg:text-xl font-semibold leading-4 group-hover:min-h-fit">
        {title}
      </p>
      <div className="lg:hidden group-hover:lg:flex group-hover:lg:flex-col max-lg:flex max-lg:flex-col gap-5 -mt-2">
        <p className="text-xs leading-[18px]">{content}</p>
        <button className="bg-white rounded-[5px] p-2 lg:py-[11px] lg:px-[22px] text-tiber-100 font-semibold">
          Connect
        </button>
      </div>
    </div>
  );
}
