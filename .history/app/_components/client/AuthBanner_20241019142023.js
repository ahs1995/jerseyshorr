import { useQueryClient } from "@tanstack/react-query";

function AuthBanner() {
  const queryClient = useQueryClient();
  const bannerMessage = queryClient.getQueryData("registerSuccess");
  return <div></div>;
}

export default AuthBanner;
