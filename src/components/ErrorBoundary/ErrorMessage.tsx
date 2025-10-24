import React from "react";
import { useNavigate } from "react-router";
import { CircleAlert, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type ErrorMessageProps = {
  message: string;
  retryFunction?: () => void;
  classname?: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  retryFunction,
  classname,
}) => {
  const navigate = useNavigate();

  return (
    <div
      data-error
      className={cn(
        "min-h-fit rounded-lg py-10 px-5 flex flex-col gap-6 items-center text-error-foreground text-md",
        classname
      )}
    >
      <section className="flex items-center gap-2">
        <CircleAlert />
        <p>{message}</p>
      </section>
      <button onClick={() => (retryFunction ? retryFunction() : navigate(0))}>
        <RotateCcw />
      </button>
    </div>
  );
};
