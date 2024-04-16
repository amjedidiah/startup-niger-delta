import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

type Props = {
  item: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  activeItem: string;
};

export default function RecentNewsNavItem({
  item,
  onClick,
  activeItem,
}: Props) {
  const isActive = activeItem === item;

  return (
    <li>
      <a
        className={cn(
          "py-1 px-4 lg:px-7 rounded-[20px] border border-tiber cursor-pointer capitalize",
          {
            "text-white bg-tiber": isActive,
            "text-tiber": !isActive,
          }
        )}
        onClick={onClick}
        data-item={item}
      >
        {item}
      </a>
    </li>
  );
}
