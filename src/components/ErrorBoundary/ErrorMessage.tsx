import React from "react";
import { useNavigate } from "react-router";

import { CircleAlert, RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";

type ErrorMessageProps = {
  message: string;
  retryFunction?: () => void;
  classname?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  retryFunction,
  classname,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "min-h-fit rounded-md py-10 px-5 flex flex-col gap-6 items-center bg-error text-error-foreground text-md",
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

export default ErrorMessage;
