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
      <div className="flex flex-col gap-16 border-2 border-primary-950 md:flex-row md:justify-between md:gap-4">
        {/* Login form */}
        <div className="flex-1">
          <LoginForm />
        </div>
        {/* Register form */}
        <div className="flex-1">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
