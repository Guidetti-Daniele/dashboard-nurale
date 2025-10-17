import React from "react";

import {
  Controller,
  useFormContext,
  type UseControllerReturn,
} from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

type FormFieldProps = {
  name: string;
  label: string;
  description?: string;
  renderInput: (field: UseControllerReturn["field"]) => React.ReactElement;
};

export type SpecificFormFieldProps = Omit<FormFieldProps, "renderInput">;

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  description,
  renderInput,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}:</FieldLabel>
          {description && <FieldDescription>{description}</FieldDescription>}

          {/* Render the input component */}
          {renderInput(field)}

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    ></Controller>
  );
};

export default FormField;
