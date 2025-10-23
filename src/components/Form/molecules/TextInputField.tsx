import React from "react";
import FormField from "../../Form/molecules/FormField";

import type { SpecificFormFieldProps } from "../../Form/molecules/FormField";
import { Input } from "../../ui/input";

const TextInputField: React.FC<SpecificFormFieldProps> = ({
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

export default TextInputField;
