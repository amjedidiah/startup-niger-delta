import { memo } from "react";
import { FieldValues, UseControllerReturn } from "react-hook-form";
import dynamic from "next/dynamic";

type Option = {
  label: string;
  value: string;
};

type Props<K extends keyof FieldValues> = {
  placeholder: string;
  options: Option[];
} & UseControllerReturn<FieldValues, K>;

const DynamicSelect = dynamic(() => import("react-select"), {
  ssr: false,
});

function SelectInput({ field, placeholder, options }: Props<any>) {
  return (
    <DynamicSelect
      isSearchable
      className="[&_.controller]:border-none [&_.controller]:shadow-none [&_.value-container]:px-0 [&_.input]:py-0 [&_.input]:my-0 [&_.dropdown-container]:p-0 [&_.dropdown-container]:pb-1"
      classNames={{
        control: () => "controller",
        input: () => "input",
        valueContainer: () => "value-container",
        dropdownIndicator: () => "dropdown-container",
        indicatorSeparator: () => "hidden",
      }}
      closeMenuOnSelect
      placeholder={placeholder}
      options={options}
      {...field}
    />
  );
}

export default memo(SelectInput);
