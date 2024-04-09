import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function CompanyInfoItem({
  title,
  value,
  className,
}: { title: string; value: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-rows-2 font-semibold lg:[&_p]:leading-[18px] lg:[&_p]:py-1 lg:[&_p]:px-3",
        className
      )}
    >
      <p className="text-gable-green bg-laurel-green-500">{title}</p>
      <p className="text-gable-green-400">{value}</p>
    </div>
  );
}
