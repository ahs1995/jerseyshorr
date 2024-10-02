"use client";

import { useState } from "react";
import Input from "../Input";
import FormLabel from "../FormLabel";
import Button from "../Button";
import FormRow from "../FormRow";

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
      </div>
      {/* cta box */}
      <div className="my-6 border-2 border-dashed border-primary-100 px-4 py-6">
        <form className="flex flex-col gap-4">
          <FormRow>
            <FormLabel htmlFor="username_email">Username or Email</FormLabel>
            <Input type="text" id="username_email" />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="password">password</FormLabel>
            <Input type="password" id="password" />
          </FormRow>

          <FormRow>
            <div className="">
              <input
                type="checkbox"
                id="remember_user"
                name="remember_user"
                className="mr-1"
              />
              <FormLabel htmlFor="remember_user">remember me</FormLabel>
            </div>
            <Button type="small">submit</Button>
          </FormRow>
        </form>
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
