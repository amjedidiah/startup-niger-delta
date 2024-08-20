import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import {
  Dispatch,
  SetStateAction,
  forwardRef,
  memo,
  useEffect,
  useMemo,
} from "react";
import {
  Controller,
  FieldValues,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import ReactSelect, { Props as SelectProps } from "react-select";
import SelectInput from "@/components/shared/form-fields/select-input";
import { getOnboardingKeyLabels } from "@/lib/utils";
import useOnboardingContext from "@/hooks/use-onboarding-context";

type Props = Omit<SelectProps, "onChange" | "onBlur" | "value" | "isDisabled"> &
  Omit<
    UseControllerProps<FieldValues, string>,
    "name" | "defaultValue" | "control"
  > & {
    dataStore?: Record<string, any>;
    dataStoreSetter?: Dispatch<SetStateAction<any | undefined>>;

    name: keyof ReturnType<typeof getOnboardingKeyLabels>;
    ["aria-label"]?: string;
  };

export default memo(
  forwardRef<ReactSelect, Props>(function Select(
    {
      dataStore,
      dataStoreSetter,

      name,
      defaultValue = dataStore?.[name],
      disabled,

      rules,
      shouldUnregister,
      "aria-label": aria,

      ...rest
    },
    ref
  ) {
    const { control, getValues } = useFormContext();

    useEffect(() => {
      return () => {
        const value = getValues(name);
        dataStoreSetter?.((prev: typeof dataStore) => ({
          ...prev,
          [name]: value,
        }));
      };
    }, [dataStoreSetter, getValues, name]);
    const { keyLabels } = useOnboardingContext();
    const label = useMemo(
      () => aria || keyLabels[name],
      [aria, keyLabels, name]
    );

    return (
      <OnboardingInputContainer label={label} name={name}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          disabled={disabled}
          rules={rules}
          shouldUnregister={shouldUnregister}
          render={(props) => (
            <SelectInput id={name} {...rest} {...props} ref={ref} />
          )}
        />
      </OnboardingInputContainer>
    );
  })
);
