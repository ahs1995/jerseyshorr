import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function UserDashboard() {
  return (
    <div className="border-2 border-accent-400">
      {/* Heading */}
      <div className="mb-6 bg-primary-50 py-2 xl:mb-10">
        <h2 className="text-center text-lg font-bold uppercase text-primary-800 xl:text-2xl">
          My account
        </h2>
      </div>
      <div className="flex w-full flex-col gap-16 border-2 border-primary-950 md:flex-row md:gap-4">
        {/* Login form */}
        <div>
          <LoginForm />
        </div>
        {/* Register form */}
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
