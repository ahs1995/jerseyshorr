import { Input } from "@/components/ui/input";
import CardWrapper from "../CardWrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters long",
  }),
  passwordConfirm: z.string().min(6, {
    message: "Password must be atleast 6 characters long",
  }),
});

const form = useForm({
  resolver: zodResolver(loginSchema),
  defaultValues: {
    email: "",
    password: "",
    passwordConfirm: "",
  },
});

function LoginForm() {
  return (
    <div>
      <CardWrapper
        label="Login to your account"
        title="login"
        backBtnHref=""
        backBtnLabel=""
      >
        {children}
      </CardWrapper>
    </div>
  );
}

export default LoginForm;
