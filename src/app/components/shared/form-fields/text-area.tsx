import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { getOnboardingKeyLabels } from "@/lib/utils";
import {
  Dispatch,
  SetStateAction,
  TextareaHTMLAttributes,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type Props = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "onBlur" | "value"
> &
  Omit<
    UseControllerProps<FieldValues, string>,
    "name" | "defaultValue" | "control" | "disabled"
  > & {
    name: keyof ReturnType<typeof getOnboardingKeyLabels>;
    ["aria-label"]?: string;

    dataStore?: Record<string, any>;
    dataStoreSetter?: Dispatch<SetStateAction<any | undefined>>;
  };

export default memo(
  forwardRef<HTMLTextAreaElement, Props>(function Input(
    {
      dataStore,
      dataStoreSetter,

      name,
      defaultValue = dataStore?.[name] || "",
      disabled,

      rules,
      shouldUnregister,
      "aria-label": aria,

      ...rest
    },
    ref
  ) {
    const {
      field: { ref: fieldRef, ...fieldRest },
    } = useController({
      name,
      defaultValue,
      disabled,
      rules,
      shouldUnregister,
    });
    const { keyLabels } = useOnboardingContext();
    const label = useMemo(
      () => aria || keyLabels[name],
      [aria, keyLabels, name]
    );

    useImperativeHandle(fieldRef, () => ref);
    useEffect(() => {
      return () =>
        dataStoreSetter?.((prev: typeof dataStore) => ({
          ...prev,
          [name]: fieldRest.value,
        }));
    }, [dataStoreSetter, fieldRest.value, name]);

    return (
      <OnboardingInputContainer label={label} name={name}>
        <textarea id={name} ref={ref} {...rest} {...fieldRest} />
      </OnboardingInputContainer>
    );
  })
);
