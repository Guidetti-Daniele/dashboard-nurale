import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field";
import TextInputField from "@/components/molecules/FormFields/TextInputField";
import PasswordInputField from "@/components/molecules/FormFields/PasswordInputField";
import Form from "@/components/Form/organisms/Form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "@/api/axios";
import { API_ENDPOINTS } from "@/api/constants/endpoints";

import { ROUTE_PATHS } from "@/routing";

const formSchema = z.object({
  username: z.string().min(1, "Username obbligatorio"),
  password: z.string().min(1, "Password obbligatoria"),
});

type FormSchema = z.infer<typeof formSchema>;

export const Login: React.FC = () => {
  const formMethods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    setError,
    formState: { errors },
  } = formMethods;

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  function onSubmit(formData: FormSchema) {
    const { username, password } = formData;

    // The following api call should be replace with a real api call (post method)
    // which calls an authentication api which should return a token or a session cookie.
    // For development purposes it's used a mocked json server that in production would be
    // replaced by a real db.
    api
      .get(`${API_ENDPOINTS.accounts}?username=${username}`)
      .then((response) => {
        const user = response.data[0] as FormSchema;

        if (!user) {
          setError("root", {
            type: "string",
            message: "Lo username inserito non esiste",
          });
          return;
        }

        if (password !== user.password) {
          setError("root", {
            type: "string",
            message: "La password non è corretta",
          });
          return;
        }

        setAuth({
          isAuthenticated: true,
          username: username,
        });
        navigate(ROUTE_PATHS.home);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-1 bg-blue-200">
      <Form<FormSchema>
        formMethods={formMethods}
        onSubmit={onSubmit}
        className="flex flex-col gap-3.5 w-xl max-w-full shadow-xl rounded-md p-5 bg-white"
      >
        {/* Username field */}
        <TextInputField name="username" label="Username:" />

        {/* Password field */}
        <PasswordInputField name="password" label="Password:" />

        {/* Root errors */}
        {errors.root && <FieldError errors={[errors.root]} />}

        {/* Submit button */}
        <Button type="submit" className="w-fit self-end mt-4">
          Accedi
        </Button>
      </Form>
    </div>
  );
};
