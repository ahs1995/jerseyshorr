import { Input } from "@/components/ui/input";
import CardWrapper from "../CardWrapper";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
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
