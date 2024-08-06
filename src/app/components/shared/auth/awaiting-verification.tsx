"use client";
import { SNDAwaitingVerification } from "@/lib/icons";
import ShouldRender from "@/components/shared/should-render";
import { cn } from "@/lib/utils";
import useAwaitingVerification from "@/hooks/use-awaiting-verification";

type Props = {
  email: string;
  handleResend(email: string): Promise<string>;
};

export default function AwaitingVerification({ email, handleResend }: Props) {
  const { isWaiting, startWaiting, currentWaitTime, isLoading } =
    useAwaitingVerification({ email, handleResend });

  return (
    <div className="flex flex-col gap-[13px]">
      <p className="text-black text-sm">
        Great! Now lets verify your email address{" "}
      </p>
      <p className="mb-[7px] inline-flex justify-center">
        <span>
          <SNDAwaitingVerification />
        </span>
      </p>
      <div className="flex flex-col gap-1 font-normal text-black text-[13px] leading-[20px]">
        <p
          className={cn({
            hidden: isLoading,
          })}
        >
          Click on the email we sent to{" "}
          <span className="font-semibold">{email}</span>
        </p>
        <p>
          <span
            className={cn({
              hidden: isLoading,
            })}
          >
            Haven’t received it?{" "}
          </span>
          <button
            className={cn("underline cursor-pointer", {
              hidden: isWaiting,
            })}
            onClick={startWaiting}
          >
            Resend email
          </button>
          <ShouldRender condition={isWaiting}>
            <span className={cn("animate-pulse", { hidden: !isLoading })}>
              Sending email...
            </span>
            <span
              className={cn({
                hidden: isLoading,
              })}
            >
              Try again in {currentWaitTime} second
              {currentWaitTime > 1 ? "s" : ""}
            </span>
          </ShouldRender>
        </p>
      </div>
    </div>
  );
}
