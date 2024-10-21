"use client";
import { useQueryClient } from "@tanstack/react-query";

function AuthBanner() {
  const queryClient = useQueryClient();
  const bannerMessage = queryClient.getQueryData("authBannerMessage");

  return (
    <div>
      <p>hello</p>
    </div>
  );
}

export default AuthBanner;
