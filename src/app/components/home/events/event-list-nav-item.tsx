import { useEventContext } from "@/contexts/event.context";
import { cn } from "@/lib/utils";

type Props = {
  item: string;
};

export default function EventListNavItem({ item }: Props) {
  const { activeNavItem: activeItem } = useEventContext();
  const isActive = activeItem === item;
  const isUpcoming = item === "upcoming";

  const commonActiveClassName =
    "text-unknown-200 relative after:absolute after:-bottom-[10px] after:h-1 after:w-[138%] after:bg-shade-of-amber after:z-[1]";

  return (
    <a
      className={cn(
        "text-xl lg:text-2xl font-black pointer after:left-0 capitalize",
        {
          [commonActiveClassName]: isActive,
          "text-[rgba(4,79,91,0.50)]": !isActive,
          "after:left-0": isUpcoming,
          "after:right-0": !isUpcoming,
        }
      )}
    >
      {item}
    </a>
  );
}
