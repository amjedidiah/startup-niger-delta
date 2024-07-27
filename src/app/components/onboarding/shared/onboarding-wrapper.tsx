import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef, memo } from "react";

export default memo(
  forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    function OnboardingWrapper({ children, className, ...rest }, ref) {
      return (
        <div
          ref={ref}
          className={cn(
            "container grid lg:grid-cols-[312px,1fr] xl:grid-cols-[392px,1fr] gap-2 lg:gap-8 xl:gap-12",
            className
          )}
          {...rest}
        >
          {children}
        </div>
      );
    }
  )
);
