import React from "react";
import FormField from "./FormField";

import type { SpecificFormFieldProps } from "./FormField";
import { Input } from "../../ui/input";

const TextInputField: React.FC<SpecificFormFieldProps> = ({
  ...formFieldProps
}) => {
  return (
    <FormField
      {...formFieldProps}
      renderInput={(field) => (
        <Input type="text" autoComplete="off" {...field} />
      )}
    />
  );
};

export default TextInputField;
