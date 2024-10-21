"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function AuthBanner() {
  const { data: bannerMessage } = useQuery("authBannerMessage", {
    initialData: null,
  });
  if (!bannerMessage) return null;
  return (
    <div className="mb-6 bg-accent-100 py-3 text-center text-accent-800">
      <p>{bannerMessage}</p>
    </div>
  );
}

export default AuthBanner;
