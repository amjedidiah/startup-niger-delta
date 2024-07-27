import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function OrangeButton({
  className,
  children,
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-gradient-2 rounded-[5px] py-[14px] px-[31px] font-semibold text-white hover:bg-unknown-100",
        className
      )}
    >
      {children}
    </button>
  );
}
