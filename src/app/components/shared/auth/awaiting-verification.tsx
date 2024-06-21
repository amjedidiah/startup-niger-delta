import { SNDAwaitingVerification } from "@/lib/icons";

type Props = {
  email: string;
};

export default function AwaitingVerification({ email }: Props) {
  const handleResendVerificationEmail = () => {};

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
        <p>
          Click on the email we sent to{" "}
          <span className="font-semibold">{email}</span>
        </p>
        <p>
          Haven’t received it?{" "}
          <span
            className="underline cursor-pointer"
            onClick={handleResendVerificationEmail}
          >
            Resend email
          </span>
        </p>
      </div>
    </div>
  );
}
