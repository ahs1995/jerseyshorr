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
      {/* Login form */}
      <div className="flex flex-col gap-16 md:flex-row md:justify-between md:gap-4">
        <LoginForm />
        {/* Register form */}
        <RegisterForm />
      </div>
    </div>
  );
}

export default UserDashboard;
