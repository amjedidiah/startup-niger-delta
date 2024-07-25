import { forwardRef, memo, useImperativeHandle } from "react";
import { FieldValues, UseControllerReturn } from "react-hook-form";
import dynamic from "next/dynamic";
import ReactSelect, { Props as SelectProps } from "react-select";

type Props = UseControllerReturn<FieldValues, any> & SelectProps;

const DynamicSelect = dynamic(() => import("react-select"), {
  ssr: false,
});

export default memo(
  forwardRef<ReactSelect, Props>(function SelectInput(
    { field: { ref: fieldRef, ...fieldRest }, ...rest },
    ref
  ) {
    useImperativeHandle(fieldRef, () => ref);

    return (
      <DynamicSelect
        isSearchable
        closeMenuOnSelect
        className="[&_.controller]:border-none [&_.controller]:shadow-none [&_.value-container]:px-0 [&_.input]:py-0 [&_.input]:my-0 [&_.dropdown-container]:p-0 [&_.dropdown-container]:pb-1"
        classNames={{
          control: () => "controller",
          input: () => "input",
          valueContainer: () => "value-container",
          dropdownIndicator: () => "dropdown-container",
          indicatorSeparator: () => "hidden",
        }}
        ref={ref as any}
        {...rest}
        {...fieldRest}
      />
    );
  })
);
