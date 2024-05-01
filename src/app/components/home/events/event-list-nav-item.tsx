"use client";

import { useEventContext } from "@/contexts/event.context";
import { cn } from "@/lib/utils";
import { memo } from "react";

type Props = {
  item: string;
};

function EventListNavItem({ item }: Props) {
  const { activeNavItem: activeItem } = useEventContext();
  const isActive = activeItem === item;
  const isUpcoming = item === "upcoming";

  return (
    <a
      className={cn(
        "text-unknown-200 md:text-lg lg:text-xl xl:text-2xl font-black cursor-pointer after:left-0 capitalize",
        {
          "relative after:absolute after:-bottom-[10px] after:h-1 after:w-[138%] after:bg-shade-of-amber after:z-[1]":
            isActive,
          "text-opacity-50": !isActive,
          "after:left-0": isUpcoming,
          "after:right-0": !isUpcoming,
        }
      )}
    >
      {item}
    </a>
  );
}

export default memo(EventListNavItem);
