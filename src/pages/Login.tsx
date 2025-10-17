import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/molecules/PasswordInput";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "@/api/axios";

const formSchema = z.object({
  username: z.string().min(1, "Username obbligatorio"),
  password: z.string().min(1, "Password obbligatoria"),
});

type FormSchema = z.infer<typeof formSchema>;

const Login: React.FC = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const errors = form.formState.errors;

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  function onSubmit(formData: FormSchema) {
    const { username, password } = formData;

    // The following api call should be replace with a real api call (post method)
    // which calls an authentication api which should return a token or a session cookie.
    // For development purposes it's used a mocked json server that in production would be
    // replaced by a real db.
    api
      .get(`/users?username=${username}`)
      .then((response) => {
        const user = response.data[0] as FormSchema;

        if (!user) {
          form.setError("root", {
            type: "string",
            message: "Lo username inserito non esiste",
          });
          return;
        }

        if (password !== user.password) {
          form.setError("root", {
            type: "string",
            message: "La password non è corretta",
          });
          return;
        }

        setAuth({
          isAuthenticated: true,
          username: username,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-1 bg-blue-200">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3.5 w-xl max-w-full shadow-xl rounded-md p-5 bg-white"
        >
          {/* Username field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username:</FormLabel>
                <FormControl>
                  <Input type="text" autoComplete="off" {...field} />
                </FormControl>
                <FormMessage className="text-error-foreground">
                  {errors.username && <p>{errors.username.message}</p>}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                  {/* <Input type="password" {...field} /> */}
                </FormControl>
                <FormMessage className="text-error-foreground">
                  {errors.password && <p>{errors.password.message}</p>}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Root errors */}
          {errors.root && (
            <FormMessage className="text-error-foreground">
              {errors.root.message}
            </FormMessage>
          )}

          {/* Submit button */}
          <Button type="submit" className="w-fit self-end mt-4">
            Accedi
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
