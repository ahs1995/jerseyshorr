"use client";

import { useState } from "react";

function DashboardContent({ user }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div>
      <h2 className="text-lg font-semibold capitalize">
        your account settings
      </h2>
      {/* account update form */}
      <div></div>
    </div>
  );
}

export default DashboardContent;
