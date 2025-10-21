import React from "react";
import { useNavigate } from "react-router";

import { CircleAlert, RotateCcw } from "lucide-react";

type ErrorMessageProps = {
  message: string;
  retryFunction?: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  retryFunction,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-8 flex flex-col justify-center items-center">
      <section className="flex items-center gap-2">
        <CircleAlert />
        <p className="text-error-foreground text-md">{message}</p>
      </section>
      <button
        className="bg-error text-error-foreground"
        onClick={() => (retryFunction ? retryFunction() : navigate(0))}
      >
        <RotateCcw />
      </button>
    </div>
  );
};

export default ErrorMessage;
