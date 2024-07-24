"use client";
import { resources } from "@/lib/constants";
import {
  SNDHelp,
  SNDResources1,
  SNDResources2,
  SNDResources3,
  SNDResources4,
  SNDResources5,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import { memo, useMemo, useState } from "react";

type Props = (typeof resources)[number];

function Resource({ info, slug, title, description }: Props) {
  const [showInfo, setShowInfo] = useState(false);

  const Icon = useMemo(
    () =>
      ({
        "startup-development-1": SNDResources1,
        "startup-development-2": SNDResources2,
        "startup-development-3": SNDResources3,
        "startup-development-4": SNDResources4,
        "startup-development-5": SNDResources5,
      }[slug] || null),
    [slug]
  );

  return (
    <div className="sm:bg-white rounded-xl flex items-center justify-between py-2 px-4 lg:py-4 gap-4 lg:gap-7 relative">
      <div
        className={cn(
          "absolute right-0 -top-[80%] py-2 px-6 rounded-[5px] w-full lg:w-[763px] bg-unknown-900 text-black z-[2]",
          {
            block: showInfo,
            hidden: !showInfo,
          }
        )}
      >
        {info}
      </div>
      {Icon && (
        <span className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-laurel-green-300 inline-flex items-center justify-center">
          <Icon />
        </span>
      )}
      <div className="flex flex-col sm:text-black font-inter flex-1">
        <p className="text-lg lg:text-xl lg:leading-[30px]">{title}</p>
        <p className="lg:text-lg font-normal lg:leading-[28px]">
          {description}
        </p>
      </div>
      <span
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="cursor-pointer"
        // onClick={() => setShowInfo((prev) => !prev)}
      >
        <SNDHelp />
      </span>
    </div>
  );
}

export default memo(Resource);
