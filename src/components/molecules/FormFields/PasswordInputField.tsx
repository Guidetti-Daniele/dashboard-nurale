import React from "react";
import FormField from "./FormField";

import type { SpecificFormFieldProps } from "./FormField";
import PasswordInput from "../Inputs/PasswordInput";

const PasswordInputField: React.FC<SpecificFormFieldProps> = ({
  ...formFieldProps
}) => {
  return (
    <FormField
      {...formFieldProps}
      renderInput={(field) => <PasswordInput id={field.name} {...field} />}
    />
  );
};

export default PasswordInputField;
