"use client";

import { useState } from "react";
import CurUserUpdateForm from "./CurUserUpdateForm";

function DashboardContent({ user }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="space-y-4">
      <h2 className="mb-4 text-lg font-semibold capitalize text-primary-800">
        your account settings
      </h2>
      {/* account update form */}
      <CurUserUpdateForm />
      <span className="border-2 border-primary-200"></span>
    </div>
  );
}

export default DashboardContent;
