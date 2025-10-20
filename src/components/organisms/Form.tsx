import React from "react";
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

interface FormProps<Schema extends FieldValues> {
  formMethods: UseFormReturn<Schema>;
  onSubmit: (data: Schema) => void;
  className: string;
  children: React.ReactNode;
}

const Form = <Schema extends FieldValues>({
  formMethods,
  onSubmit,
  className,
  children,
}: FormProps<Schema>) => {
  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
