import { Input } from "@/components/ui/input";
import CardWrapper from "../CardWrapper";

function LoginForm() {
  return (
    <div>
      <CardWrapper label="" title="" backBtnHref="" backBtnLabel="">
        {children}
      </CardWrapper>
    </div>
  );
}

export default LoginForm;
