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
    <div className="px-4 xl:px-6 pt-14 pb-8 flex flex-col gap-8 bg-laurel-green-200 last:rounded-b-none lg:mt-[66px] lg:min-h-[225px] xl:min-h-[209px] cursor-pointer group lg:hover:-mt-[66px] lg:hover:pt-12 lg:hover:bg-shade-of-amber lg:hover:gap-4">
      <Image src={imageSrc} alt={title} />
      <p className="text-xl font-semibold leading-4">{title}</p>
      <div className="lg:hidden group-hover:lg:flex group-hover:lg:flex-col max-lg:flex max-lg:flex-col gap-5 -mt-2">
        <p className="text-xs leading-[18px]">{content}</p>
        <button className="bg-white rounded-[5px] py-[11px] px-[22px] text-tiber-100 font-semibold">
          Connect
        </button>
      </div>
    </div>
  );
}
