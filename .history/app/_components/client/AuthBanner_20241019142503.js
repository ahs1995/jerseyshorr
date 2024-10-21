import { useQueryClient } from "@tanstack/react-query";

function AuthBanner() {
  const queryClient = useQueryClient();
  const SuccessMessage = queryClient.getQueryData("registerSuccess");
  return (
    <div>
      <p>{}</p>
    </div>
  );
}

export default AuthBanner;
