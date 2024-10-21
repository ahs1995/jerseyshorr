import LoginForm from "./client/LoginForm";
import RegisterForm from "./client/RegisterForm";

function AuthForms() {
  return (
    <div>
      <div className="flex flex-col gap-16 md:flex-row md:gap-4 lg:gap-[6rem] xl:gap-[10rem]">
        {/* Login form */}
        <div className="flex-1">
          <LoginForm />
        </div>
        <span className="hidden border-l-[1px] border-primary-50 xl:block"></span>
        {/* Register form */}
        <div className="flex-1">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default AuthForms;
