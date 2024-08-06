"use client";
import AuthFormPassword from "@/components/shared/auth/auth-form-password";
import { SNDAppleIcon, SNDGoogleIcon } from "@/lib/icons";
import { memo, MouseEventHandler, useCallback, useMemo } from "react";
import { signIn } from "next-auth/react";
import {
  FormProvider,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { defaultInputRules, emailRules } from "@/lib/constants";
import { AuthFormValues, Providers } from "@/lib/types";
import { dbGetUserExists } from "@/lib/actions/db";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  isSignupForm?: boolean;
};

const nameInputRules: RegisterOptions<AuthFormValues, "name"> = {
  ...defaultInputRules,
  minLength: {
    value: 5,
    message: "Please enter your full name",
  },
};

const AuthForm = ({ isSignupForm = false }: Props) => {
  const router = useRouter();
  const buttonText = !isSignupForm ? "Sign in" : "Sign up with email";

  const useFormValues = useForm<AuthFormValues>({
    mode: "onChange",
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useFormValues;

  const isDisabled = !isValid || isSubmitting;

  const authEmailRules: RegisterOptions<AuthFormValues, "email"> =
    useMemo(() => {
      if (!isSignupForm) return emailRules;

      return {
        ...defaultInputRules,
        validate: async (value) => {
          if (
            !String(value)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
          )
            return "Invalid email address";

          const existingUser = await dbGetUserExists(value);
          return existingUser
            ? "A user with this email address already exists"
            : true;
        },
      };
    }, [isSignupForm]);

  const onSubmit: SubmitHandler<AuthFormValues> = useCallback(
    async (formData) => {
      try {
        const response = await signIn(Providers.Credentials, {
          ...formData,
          redirect: false,
        });
        if (!response?.ok)
          throw new Error(response?.error || "An error occurred");

        router.push("/verify-email");
      } catch (error) {
        if (error instanceof Error) toast.error(error.message);
        console.error({ error });
      }
    },
    [router]
  );

  const signInWithGoogle: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      signIn(Providers.Google, {
        redirect: true,
        callbackUrl: "/onboarding",
      });
    },
    []
  );

  return (
    <FormProvider {...useFormValues}>
      <div>
        <form
          className="flex flex-col gap-[18px]"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            disabled={isDisabled}
            className={cn(
              "mt-1 py-2 text-white rounded-[5px] disabled:bg-gray-100",
              {
                "border border-tiber-200 bg-gradient-4": !isDisabled,
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
          <button className="flex items-center py-2 justify-center gap-[7px] rounded-[5px] border border-tiber-300 ">
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
