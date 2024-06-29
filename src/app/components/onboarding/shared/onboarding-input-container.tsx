import { cn } from "@/lib/utils";
import { PropsWithChildren, memo } from "react";
import { useController } from "react-hook-form";

type Props = PropsWithChildren & {
  label: string;
  name: string;
  className?: string;
};

function OnboardingInputContainer({ children, label, name, className }: Props) {
  const {
    fieldState: { error },
  } = useController({ name });

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <fieldset className={cn({ error })}>
        <legend className={cn({ error })}>{label}</legend>
        {children}
      </fieldset>

      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}

export default memo(OnboardingInputContainer);
