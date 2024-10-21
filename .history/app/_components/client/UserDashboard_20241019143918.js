import AuthBanner from "./AuthBanner";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function UserDashboard() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-6 bg-primary-50 py-2 xl:mb-10">
        <h2 className="text-center text-lg font-bold uppercase text-primary-800 xl:text-2xl">
          My account
        </h2>
      </div>
      {/* <div>
        <AuthBanner />
      </div> */}
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

export default UserDashboard;
