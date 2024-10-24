"use client";

import { useState } from "react";
import CurUserUpdateForm from "./CurUserUpdateForm";

function DashboardContent({ user }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div>
      <h2 className="text-lg font-semibold capitalize">
        your account settings
      </h2>
      {/* account update form */}
      <CurUserUpdateForm />
    </div>
  );
}

export default DashboardContent;
