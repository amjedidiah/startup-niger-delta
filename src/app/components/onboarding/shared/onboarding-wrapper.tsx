import { PropsWithChildren, memo } from "react";

function OnboardingWrapper({ children }: PropsWithChildren) {
  return (
    <div className="container grid lg:grid-cols-[392px,1fr] gap-x-8">
      {children}
    </div>
  );
}

export default memo(OnboardingWrapper);
