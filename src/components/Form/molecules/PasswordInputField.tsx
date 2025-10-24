import React from "react";

import {
  FormField,
  PasswordInput,
  type SpecificFormFieldProps,
} from "@/components";

export const PasswordInputField: React.FC<SpecificFormFieldProps> = ({
  ...formFieldProps
}) => {
  return (
    <FormField
      {...formFieldProps}
      renderInput={(field) => <PasswordInput id={field.name} {...field} />}
    />
  );
};
