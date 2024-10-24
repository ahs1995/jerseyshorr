"use client";

import { useState } from "react";
import CurUserUpdateForm from "./CurUserUpdateForm";
import CurPasswordUpdateForm from "./CurPasswordUpdateForm";

function DashboardContent({ user }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="mx-auto space-y-14">
      <div>
        <h2 className="mb-4 text-lg font-semibold capitalize text-primary-800 xl:text-xl">
          your account settings
        </h2>
        {/* account update form */}
        <CurUserUpdateForm />
      </div>
      <div className="w-full border-[0.3px] border-primary-50 opacity-40 outline-none"></div>
      <div>
        <h2 className="mb-4 text-lg font-semibold capitalize text-primary-800 xl:text-xl">
          Update your password
        </h2>
        {/* account update form */}
        <CurPasswordUpdateForm />
      </div>
    </div>
  );
}

export default DashboardContent;
