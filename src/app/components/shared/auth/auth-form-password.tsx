"use client";
import { SNDEye } from "@/lib/icons";
import {
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
  useImperativeHandle,
} from "react";
import { cn } from "@/lib/utils";
import {
  RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";
import { IoEyeOff } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";
import { AuthFormValues } from "@/lib/types";
import { defaultInputRules } from "@/lib/constants";

const rules: RegisterOptions<AuthFormValues, "password"> = {
  ...defaultInputRules,
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters long",
  },
  validate: (value) => {
    if (!value.match(/[A-Z]/))
      return "Password must contain at least one uppercase letter";
    if (!value.match(/[0-9]/))
      return "Password must contain at least one number";
    if (!value.match(/[!@#$%^&*(),.?":{}|<>]/))
      return "Password must contain a special character";

    return true;
  },
};

export default memo(function AuthFormPassword() {
  const {
    field: { ref: fieldRef, ...fieldRest },
  } = useController({
    name: "password",
    rules,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputType, setInputType] = useState("password");
  const {
    formState: { errors },
  } = useFormContext();

  useImperativeHandle(fieldRef, () => inputRef);
  const toggleInputType = useCallback(() => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
    inputRef.current?.focus();
  }, []);

  const handleFocus = useDebouncedCallback(() => {
    const valueLength = Number(inputRef.current?.value.length);
    inputRef.current?.setSelectionRange(valueLength, valueLength);
  }, 1);

  const Icon = useMemo(
    () => (inputType === "password" ? SNDEye : IoEyeOff),
    [inputType]
  );

  return (
    <div
      className={cn(
        errors.password ? "border-red-500" : "border-tiber-300",
        "flex items-center rounded-[5px] border border-tiber-300 py-2 px-[17px] gap-4"
      )}
    >
      <input
        ref={inputRef}
        type={inputType}
        onFocus={handleFocus}
        id="password"
        className="flex-1 h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
        placeholder="Enter password"
        {...fieldRest}
      />
      <span onClick={toggleInputType} className="cursor-pointer">
        <Icon />
      </span>
    </div>
  );
});
