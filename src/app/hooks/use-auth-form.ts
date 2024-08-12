import { dbGetUserExists } from "@/lib/actions/db";
import { defaultInputRules, emailRules } from "@/lib/constants";
import { AuthFormValues, Providers } from "@/lib/types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export type UseAuthFormProps = {
  isSignupForm?: boolean;
};

const DEFAULT_AUTH_FORM_VALUES = {
  name: "",
  email: "",
  password: "",
};

const getAuthEmailRules = (
  isSignupForm: boolean
): RegisterOptions<AuthFormValues, "email"> => {
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
};

export default function useAuthForm({
  isSignupForm = false,
}: UseAuthFormProps) {
  const router = useRouter();

  const useFormValues = useForm<AuthFormValues>({
    mode: "onChange",
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: DEFAULT_AUTH_FORM_VALUES,
  });

  const authEmailRules: RegisterOptions<AuthFormValues, "email"> = useMemo(
    () => getAuthEmailRules(isSignupForm),
    [isSignupForm]
  );

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
        toast.error((error as Error).message);
        console.error({ error });
      }
    },
    [router]
  );

  const buttonText = useMemo(
    () => (!isSignupForm ? "Sign in" : "Sign up with email"),
    [isSignupForm]
  );

  return { useFormValues, onSubmit, authEmailRules, buttonText };
}
