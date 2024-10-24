"use client";

import { useState } from "react";
import CurUserUpdateForm from "./CurUserUpdateForm";

function DashboardContent({ user }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="space-y-10">
      <div>
        <h2 className="mb-4 text-lg font-semibold capitalize text-primary-800">
          your account settings
        </h2>
        {/* account update form */}
        <CurUserUpdateForm />
      </div>
      <div className="w-full border-[0.3px] border-primary-50 no-underline"></div>
    </div>
  );
}

export default DashboardContent;
