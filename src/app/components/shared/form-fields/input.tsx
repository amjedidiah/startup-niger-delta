import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
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
  useFormContext,
} from "react-hook-form";
import PhoneInputWithCountry, {
  Country,
} from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { CldUploadWidget, CldUploadWidgetProps } from "next-cloudinary";
import { SNDUpload } from "@/lib/icons";
import useFileComponent from "@/hooks/use-file-component";
import ShouldRender from "@/components/shared/should-render";
import { maxFileSize } from "@/lib/constants";
import { cn, getOnboardingKeyLabels } from "@/lib/utils";
import ImagePreview from "@/components/shared/image-preview";
import useOnboardingContext from "@/hooks/use-onboarding-context";

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "onBlur" | "value"
> &
  Omit<
    UseControllerProps<FieldValues, string>,
    "name" | "defaultValue" | "disabled"
  > & {
    name: keyof ReturnType<typeof getOnboardingKeyLabels>;
    ["aria-label"]?: string;

    dataStore?: Record<string, any>;
    dataStoreSetter?: Dispatch<SetStateAction<any | undefined>>;

    defaultCountry?: Country;
    international?: boolean;

    fileOptions?: CldUploadWidgetProps["options"];
  };

const FileComponent = memo(
  forwardRef<HTMLInputElement, any>(function Component(
    { name, rest, fieldRest },
    ref
  ) {
    const { getValues } = useFormContext();
    const { fileOptions: options, ...rem } = rest;
    const { handleSuccess, handleUploadAdded, uploadMessage } =
      useFileComponent({
        options,
        name,
      });
    const hasError = uploadMessage?.type === "error";
    const hasSuccess = uploadMessage?.type === "success";
    const uploadMessageText = uploadMessage?.text || "";
    const uploadMessageData = uploadMessage?.data || getValues(name);

    return (
      <>
        <CldUploadWidget
          signatureEndpoint="/api/sign-cloudinary-params"
          onSuccess={handleSuccess}
          onUploadAdded={handleUploadAdded}
          options={{ maxFileSize, ...options }}
        >
          {function ({ open }) {
            if (!open) return <p>Please refresh</p>;

            return (
              <div
                className="pb-6 pt-4 flex items-center flex-wrap justify-center gap-3 cursor-pointer"
                onClick={() => open()}
              >
                <SNDUpload />
                <div
                  className={cn("text-gray-100 text-[13px] font-light", {
                    "text-red-500": hasError,
                    "text-green-500": hasSuccess,
                  })}
                >
                  <ShouldRender condition={!uploadMessageData}>
                    Upload {options.clientAllowedFormats.join(", ")}
                  </ShouldRender>
                  <ShouldRender condition={!!uploadMessageData}>
                    {hasError ? (
                      uploadMessageText
                    ) : (
                      <ImagePreview src={uploadMessageData} />
                    )}
                  </ShouldRender>
                </div>
              </div>
            );
          }}
        </CldUploadWidget>
        <input className="hidden" ref={ref} {...rem} {...fieldRest} />
      </>
    );
  })
);

const Component = memo(
  forwardRef<HTMLInputElement, any>(function Component(
    { name, type, rest, fieldRest },
    ref
  ) {
    switch (type) {
      case "tel":
        return (
          <PhoneInputWithCountry
            id={name}
            ref={ref}
            autoComplete="tel"
            {...rest}
            {...fieldRest}
          />
        );
      case "file":
        return (
          <FileComponent
            name={name}
            ref={ref}
            rest={rest}
            fieldRest={fieldRest}
          />
        );
      default:
        return (
          <input id={name} type={type} ref={ref} {...rest} {...fieldRest} />
        );
    }
  })
);

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
        <Component
          name={name}
          type={type}
          ref={ref}
          rest={rest}
          fieldRest={fieldRest}
        />
      </OnboardingInputContainer>
    );
  })
);
