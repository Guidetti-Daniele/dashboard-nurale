import { useState, type ComponentPropsWithoutRef } from "react";

import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput: React.FC<ComponentPropsWithoutRef<typeof Input>> = ({
  ...props
}) => {
  const [isShown, setIsShown] = useState<boolean>();

  return (
    <div className="relative">
      <Input type={isShown ? "text" : "password"} {...props} />
      <span
        onClick={() => setIsShown(!isShown)}
        className="absolute top-1/2 right-2 translate-y-[-50%]"
      >
        {isShown ? <Eye /> : <EyeOff />}
      </span>
    </div>
  );
};

export default PasswordInput;
