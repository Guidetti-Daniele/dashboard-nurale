import React from "react";
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

interface FormProps<Schema extends FieldValues> {
  useFormProps: UseFormReturn<Schema>;
  onSubmit: (data: Schema) => void;
  className: string;
  children: React.ReactNode;
}

const Form = <Schema extends FieldValues>({
  useFormProps,
  onSubmit,
  className,
  children,
}: FormProps<Schema>) => {
  const { handleSubmit } = useFormProps;

  return (
    <FormProvider {...useFormProps}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
