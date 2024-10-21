"use client";
import { useQueryClient } from "@tanstack/react-query";

function AuthBanner() {
  const queryClient = useQueryClient();
  const bannerMessage = queryClient.getQueryData("authBannerMessage");
  if (!bannerMessage) return null;
  return (
    <div className="bg-accent-100 py-3 text-center text-accent-800">
      <p>{bannerMessage}</p>
    </div>
  );
}

export default AuthBanner;
