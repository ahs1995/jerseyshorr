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
      <div>
        {/* text content */}
        <div className="flex flex-col gap-4">
          <p>
            your email address is{" "}
            <span className="font-bold">{user.email}</span>
          </p>
        </div>
        {/* change email button */}
        <span
          className="cursor-pointer capitalize text-accent-500 underline"
          onClick={() => setOpenForm((prev) => !prev)}
        >
          change
        </span>
      </div>
    </div>
  );
}

export default DashboardContent;
