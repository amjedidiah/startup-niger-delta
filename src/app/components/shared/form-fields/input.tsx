import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
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
import ShouldRender from "@/components/shared/should-render";
import PhoneInputWithCountry, {
  Country,
} from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "onBlur" | "value"
> &
  Omit<
    UseControllerProps<FieldValues, string>,
    "name" | "defaultValue" | "disabled"
  > & {
    name: string;
    ["aria-label"]: string;

    dataStore?: Record<string, any>;
    dataStoreSetter?: Dispatch<SetStateAction<any | undefined>>;

    defaultCountry?: Country;
    international?: boolean;
  };

export default memo(
  forwardRef<HTMLInputElement, Props>(function Input(
    {
      dataStore,
      dataStoreSetter,

      name,
      defaultValue = dataStore?.[name] || "",
      disabled,

      rules,
      shouldUnregister,

      type = "text",
      control,

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
        <ShouldRender condition={type !== "tel"}>
          <input id={name} type={type} ref={ref} {...rest} {...fieldRest} />
        </ShouldRender>
        <ShouldRender condition={type === "tel"}>
          <PhoneInputWithCountry
            id={name}
            ref={ref}
            autoComplete="tel"
            {...rest}
            {...fieldRest}
          />
        </ShouldRender>
      </OnboardingInputContainer>
    );
  })
);
