"use client";
import AuthFormPassword from "@/components/shared/auth/auth-form-password";
import { SNDAppleIcon, SNDGoogleIcon } from "@/lib/icons";
import { memo } from "react";
import { signIn } from "next-auth/react";
import { FormProvider, RegisterOptions } from "react-hook-form";
import { cn } from "@/lib/utils";
import { defaultInputRules } from "@/lib/constants";
import { AuthFormValues, Providers } from "@/lib/types";
import useAuthForm, { UseAuthFormProps } from "@/hooks/use-auth-form";

const nameInputRules: RegisterOptions<AuthFormValues, "name"> = {
  ...defaultInputRules,
  minLength: {
    value: 5,
    message: "Please enter your full name",
  },
};

const oauthSignIn = (provider: Providers) =>
  signIn(provider, {
    redirect: true,
    callbackUrl: "/onboarding",
  });

const signInWithGoogle = () => oauthSignIn(Providers.Google);
const signInWithApple = () => oauthSignIn(Providers.Apple);

const AuthForm = (props: UseAuthFormProps) => {
  const { useFormValues, onSubmit, authEmailRules, buttonText } =
    useAuthForm(props);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useFormValues;

  return (
    <FormProvider {...useFormValues}>
      <div>
        <form
          className="flex flex-col gap-[18px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {props.isSignupForm && (
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-black text-sm leading-[4px] text-left"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", nameInputRules)}
                id="name"
                className={cn(
                  errors.name ? "border-red-500" : "border-tiber-300",
                  "rounded-[5px] border  py-2 px-[17px] h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
                )}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-xs self-start text-red-500">
                  {errors.name.message}
                </p>
              )}
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
              {...register("email", authEmailRules)}
              type="email"
              name="email"
              id="email"
              className={cn(
                errors.email ? "border-red-500" : "border-tiber-300",
                "rounded-[5px] border  py-2 px-[17px] h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
              )}
              placeholder="Enter email address"
            />

            {errors.email && (
              <p className="text-xs self-start text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-black text-sm leading-[4px] text-left"
            >
              Password
            </label>

            <AuthFormPassword />
            {errors.password && (
              <p className="text-xs self-start text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            disabled={!isValid || isSubmitting}
            className={cn(
              "mt-1 py-2 text-white rounded-[5px] [&:not(:disabled)]:border [&:not(:disabled)]:border-tiber-200 [&:not(:disabled)]:bg-gradient-4 disabled:bg-gray-300",
              {
                "animate-pulse": isSubmitting,
              }
            )}
          >
            {buttonText}
          </button>
        </form>
        <p className="mt-8 mb-6 xl:my-5 xl:pb-0 text-gray-100 text-xs font-normal leading-[18px] relative before:absolute before:bottom-2 before:left-0 before:w-[45%] before:h-[1px] before:bg-[rgba(149,149,160,0.30)] after:absolute after:bottom-2 after:right-0 after:w-[45%] after:h-[1px] after:bg-[rgba(149,149,160,0.30)]">
          OR
        </p>

        <div className="flex flex-col gap-[10px]">
          <button
            className="flex items-center py-2 justify-center gap-[7px] rounded-[5px] border border-tiber-300 "
            onClick={signInWithApple}
          >
            <span>
              <SNDAppleIcon />
            </span>
            <span>Continue with Apple</span>
          </button>
          <button
            className="flex items-center py-2 justify-center gap-[7px] rounded-[5px] border border-tiber-300"
            onClick={signInWithGoogle}
          >
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
    </FormProvider>
  );
};

export default memo(AuthForm);
