import { useState } from "react";

function DashboardContent({ user }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div>
      {/* email details */}
      <div className="flex items-end justify-between">
        {/* text content */}
        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold capitalize">email address</h3>
          <p>
            your email address is
            <span className="font-bold">{user.email}</span>
          </p>
        </div>
        {/* change email button */}
        <span
          className="capitalize text-accent-500 underline"
          onClick={() => setOpenForm((prev) => !prev)}
        >
          change
        </span>
      </div>
    </div>
  );
}

export default DashboardContent;
