import { Input } from "@/components/ui/input";
import CardWrapper from "../CardWrapper";
import * as z from "zod";

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
