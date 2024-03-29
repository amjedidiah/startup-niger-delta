"use client";
import AuthFormPassword from "@/components/shared/auth/auth-form-password";
import { SNDAppleIcon, SNDGoogleIcon } from "@/lib/icons";
import AwaitingVerification from "@/components/shared/auth/awaiting-verification";
import { FormEventHandler, memo, useState } from "react";

type Props = {
  isSignupForm?: boolean;
};

const AuthForm = ({ isSignupForm = false }: Props) => {
  const [isAwaitingVerification, setIsAwaitingVerification] = useState(false);
  const [email, setEmail] = useState("someone@address.com");
  const buttonText = !isSignupForm ? "Sign in" : "Sign up with email";

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isSignupForm) setIsAwaitingVerification(true);
  };

  if (isAwaitingVerification) return <AwaitingVerification email={email} />;

  return (
    <div>
      <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
        {isSignupForm && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-black text-sm leading-[4px] text-left"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-[5px] border border-tiber-300 py-2 px-[17px] h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
              placeholder="Enter your names"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-black text-sm leading-[4px] text-left"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-[5px] border border-tiber-300 py-2 px-[17px] h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
            placeholder="Enter email address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-black text-sm leading-[4px] text-left"
          >
            Password
          </label>
          <AuthFormPassword />
        </div>

        <button className="mt-1 py-2 bg-gradient-4 border border-tiber-200 text-white rounded-[5px]">
          {buttonText}
        </button>
      </form>
      <p className="mt-8 mb-6 xl:my-5 xl:pb-0 text-gray-100 text-xs font-normal leading-[18px] relative before:absolute before:bottom-2 before:left-0 before:w-[45%] before:h-[1px] before:bg-[rgba(149,149,160,0.30)] after:absolute after:bottom-2 after:right-0 after:w-[45%] after:h-[1px] after:bg-[rgba(149,149,160,0.30)]">
        OR
      </p>

      <div className="flex flex-col gap-[10px]">
        <button className="flex items-center py-2 justify-center gap-[7px] rounded-[5px] border border-tiber-300 ">
          <span>
            <SNDAppleIcon />
          </span>
          <span>Continue with Apple</span>
        </button>
        <button className="flex items-center py-2 justify-center gap-[7px] rounded-[5px] border border-tiber-300 ">
          <span>
            <SNDGoogleIcon />
          </span>
          <span>Continue with Google</span>
        </button>
        <p className="text-gray-100 text-[13px] leading-[20px] text-center max-w-[289px] mx-auto">
          By clicking the button above, you agree to our Terms of Use and
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default memo(AuthForm);
