import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function UserDashboard() {
  return (
    <div>
      {/* Heading */}
      <div>
        <h2>My account</h2>
      </div>
      {/* Login form */}
      <div>
        <LoginForm />
      </div>

      {/* Register form */}
      <RegisterForm />
    </div>
  );
}

export default UserDashboard;
