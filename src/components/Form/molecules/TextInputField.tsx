import React from "react";

import { FormField, Input, type SpecificFormFieldProps } from "@/components";

export const TextInputField: React.FC<SpecificFormFieldProps> = ({
  ...formFieldProps
}) => {
  return (
    <FormField
      {...formFieldProps}
      renderInput={(field) => (
        <Input id={field.name} type="text" autoComplete="off" {...field} />
      )}
    />
  );
};
