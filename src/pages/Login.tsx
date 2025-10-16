import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z.string().min(1, "Username obbligatorio"),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=(?:.*\d){2,})(?=.*[^A-Za-z0-9]).{8,}$/,
      "La password deve essere almeno di 8 caratteri e deve contenere almeno 1 carattere speciale e 2 numeri."
    ),
});

const Login: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(formData: z.infer<typeof formSchema>) {
    console.log(formData);
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
                  <Input type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

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
