"use client";

import { useState } from "react";
import CurUserUpdateForm from "./CurUserUpdateForm";
import CurPasswordUpdateForm from "./CurPasswordUpdateForm";

function DashboardContent({ user }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="space-y-14 md:space-y-10 md:pl-16">
      Your order details will be displayed here
    </div>
  );
}

export default DashboardContent;
