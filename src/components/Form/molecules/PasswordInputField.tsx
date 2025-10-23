import React from "react";
import FormField from "../../Form/molecules/FormField";

import type { SpecificFormFieldProps } from "../../Form/molecules/FormField";
import PasswordInput from "../../Form/atoms/PasswordInput";

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
