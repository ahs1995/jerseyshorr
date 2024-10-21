import { useQueryClient } from "@tanstack/react-query";

function AuthBanner() {
  const queryClient = useQueryClient();
  const bannerMessage = queryClient.getQueryData("authBannerMessage");
  return (
    <div>
      <p>{}</p>
    </div>
  );
}

export default AuthBanner;
