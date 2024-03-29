"use client";
import { SNDEye } from "@/lib/icons";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";

const AuthFormPassword = () => {
  const [inputType, setInputType] = useState("password");
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleInputType = useCallback(() => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
    inputRef.current?.focus();
  }, []);

  const handleFocus = useDebouncedCallback((event) => {
    const valueLength = Number(inputRef.current?.value.length);
    inputRef.current?.setSelectionRange(valueLength, valueLength);
  }, 1);

  const Icon = useMemo(
    () => (inputType === "password" ? SNDEye : IoEyeOff),
    [inputType]
  );

  return (
    <div className="flex items-center rounded-[5px] border border-tiber-300 py-2 px-[17px] gap-4">
      <input
        ref={inputRef}
        type={inputType}
        onFocus={handleFocus}
        name="password"
        id="password"
        className="flex-1 h-auto placeholder:text-gray-100 text-[15px] outline-none shadow-none"
        placeholder="Enter password"
      />
      <span onClick={toggleInputType} className="cursor-pointer">
        <Icon />
      </span>
    </div>
  );
};

export default memo(AuthFormPassword);
