import { Event } from "@/components/home/events/event-list";
import OrangeButton from "@/components/shared/orange-button";
import { truncateText } from "@/lib/utils";
import Image from "next/image";

export default function EventCard({
  startTime,
  endTime,
  src,
  slug,
  name,
  excerpt,
  registrationLink,
}: Event) {
  const processedExcerpt = truncateText(excerpt);

  return (
    <div className="grid min-[567px]:max-lg:grid-cols-[150px,1fr] min-[567px]:max-lg:grid-rows-[auto,auto,auto] lg:grid-rows-1 lg:grid-cols-[82px,118px,1fr,auto] lg:items-center gap-4 lg:gap-10 rounded-[4px] bg-[rgba(255,255,255,0.50)] shadow-event-card py-4 px-8 lg:py-6 lg:px-[62px]">
      <p className="text-black lg:text-lg font-bold lg:flex lg:flex-col gap-0 min-[567px]:max-lg:row-start-2 min-[567px]:max-lg:col-start-2">
        <span>{startTime}</span>
        <span>-</span>
        <span>{endTime}</span>
      </p>
      <div className="relative max-[567px]:h-[150px]  h-full rounded-[4px] overflow-hidden min-[567px]:max-lg:col-start-1 min-[567px]:max-lg:row-span-full">
        <Image
          src={src}
          alt={slug}
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill
          sizes="100%"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <p className="text-black text-lg lg:text-[22px] font-bold">{name}</p>
        <p className="text-[rgba(21,50,48,0.60)] lg:text-lg">
          {processedExcerpt}
        </p>
      </div>
      <a href={registrationLink} className="min-[567px]:max-lg:col-start-2">
        <OrangeButton className="py-[5px] px-[21px]">Action</OrangeButton>
      </a>
    </div>
  );
}
