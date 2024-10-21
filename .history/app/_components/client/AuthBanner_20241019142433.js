import { useQueryClient } from "@tanstack/react-query";

function AuthBanner() {
  const queryClient = useQueryClient();
  const SuccessMessage = queryClient.getQueryData("registerSuccess");
  const failMessage = queryClient.getQueryData("registerFail");
  return <div></div>;
}

export default AuthBanner;
