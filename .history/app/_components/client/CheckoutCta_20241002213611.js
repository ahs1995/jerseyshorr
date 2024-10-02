"use client";

import { useState } from "react";
import Input from "../Input";
import FormLabel from "../FormLabel";
import Button from "../Button";

function CheckoutCta() {
  const [openLogin, setOpenLogin] = useState(false);

  function handleOpenLogin() {
    setOpenLogin((prev) => !prev);
  }
  return (
    <div className="mb-16 flex flex-col gap-4 text-xs capitalize text-primary-800">
      <div className="relative flex gap-2">
        <h5>returning customer?</h5>
        <span className="text-accent-500 underline" onClick={handleOpenLogin}>
          click here to login
        </span>
        {/* cta box */}
        <div>
          <form>
            <div>
              <FormLabel htmlFor="username_email">Username or Email</FormLabel>
              <Input type="text" id="username_email" />
            </div>
            <div>
              <FormLabel htmlFor="password">password</FormLabel>
              <Input type="password" id="password" />
            </div>
            <div>
              <div>
                <Input type="checkbox" id="remember_user" />
                <FormLabel htmlFor="remember_user">Remember me</FormLabel>
              </div>
              <Button type="small">submit</Button>
            </div>
          </form>
        </div>
      </div>
      <span className="flex gap-2">
        <h5>have a coupon?</h5>
        <span href="#" className="text-accent-500 underline">
          click here to enter your code
        </span>
      </span>
    </div>
  );
}

export default CheckoutCta;
