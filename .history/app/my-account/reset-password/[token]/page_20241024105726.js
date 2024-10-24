import ResetPasswordForm from "@/app/_components/client/ResetPasswordForm";
import AccountLayout from "@/app/_components/Layout/AccountLayout";

function ResetPasswordPage({ params }) {
  return (
    <AccountLayout>
      <ResetPasswordForm token={params.token} />
    </AccountLayout>
  );
}

export default ResetPasswordPage;
