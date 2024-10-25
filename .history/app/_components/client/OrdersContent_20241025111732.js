"use client";

import { useState } from "react";

function OrdersContent({ user }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="space-y-14 md:space-y-10 md:pl-16">
      Your order details will be displayed here
    </div>
  );
}

export default OrdersContent;
