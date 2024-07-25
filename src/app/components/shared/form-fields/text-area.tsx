import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import {
  Dispatch,
  SetStateAction,
  TextareaHTMLAttributes,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
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
    name: string;
    ["aria-label"]: string;

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

    useImperativeHandle(fieldRef, () => ref);
    useEffect(() => {
      return () =>
        dataStoreSetter?.((prev: typeof dataStore) => ({
          ...prev,
          [name]: fieldRest.value,
        }));
    }, [dataStoreSetter, fieldRest.value, name]);

    return (
      <OnboardingInputContainer label={rest["aria-label"]} name={name}>
        <textarea id={name} ref={ref} {...rest} {...fieldRest} />
      </OnboardingInputContainer>
    );
  })
);
