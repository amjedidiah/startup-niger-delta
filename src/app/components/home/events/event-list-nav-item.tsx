"use client";

import { useEventContext } from "@/contexts/event.context";
import { cn } from "@/lib/utils";
import { memo, useCallback } from "react";

type Props = {
  item: string;
};

function EventListNavItem({ item }: Props) {
  const {
    activeNavItem: activeItem,
    swiperInstance,
    firstPastEventIndex,
  } = useEventContext();
  const isActive = activeItem === item;
  const isUpcoming = item === "upcoming";

  const handleClick = useCallback(() => {
    if (!firstPastEventIndex) return;

    swiperInstance?.slideTo(isUpcoming ? 0 : firstPastEventIndex);
  }, [firstPastEventIndex, isUpcoming, swiperInstance]);

  return (
    <button
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
      onClick={handleClick}
    >
      {item}
    </button>
  );
}

export default memo(EventListNavItem);
