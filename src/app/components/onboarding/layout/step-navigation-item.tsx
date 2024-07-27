import { cn } from "@/lib/utils";
import { memo } from "react";

type StepNavigationItemProps = {
  value: string;
  isActive: boolean;
  isPassed: boolean;
  isFirst: boolean;
};

function StepNavigationItem({
  value,
  isActive,
  isPassed,
  isFirst,
}: StepNavigationItemProps) {
  return (
    <li
      className={cn(
        "max-lg:border-b-[2px] lg:border-l-[3px] border-laurel-green-400 lg:py-[10px] lg:px-8 text-laurel-green-400 font-normal",
        {
          "text-gable-green border-shade-of-amber": isPassed,
          "text-gable-green border-unknown-100 lg:text-lg xl:text-xl font-bold":
            isActive,
          "lg:py-9": !isFirst,
        }
      )}
    >
      {value}
    </li>
  );
}

export default memo(StepNavigationItem);
