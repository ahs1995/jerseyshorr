"use client";

import { useState } from "react";
import Input from "../Input";
import FormLabel from "../FormLabel";
import Button from "../Button";
import FormRow from "../FormRow";
import clsx from "clsx";

function CheckoutCta() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openCoupon, setOpenCoupon] = useState(false);

  function handleOpenLogin() {
    setOpenLogin((prev) => !prev);
  }

  function handleOpenCoupon() {
    setOpenCoupon((prev) => !prev);
  }
  return (
    <div className="mb-16 flex flex-col gap-4 text-xs capitalize text-primary-800">
      <div className="relative flex gap-2">
        <h5>returning customer?</h5>
        <span
          className="cursor-pointer text-accent-500 underline"
          onClick={handleOpenLogin}
        >
          click here to login
        </span>
      </div>
      {/* login cta box */}
      <div
        className={clsx(
          "transition-max-height my-6 overflow-hidden border-2 border-dashed border-primary-100 px-4 py-6 duration-500 ease-in-out",
          openLogin ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <form className="flex flex-col gap-4">
          <FormRow>
            <FormLabel htmlFor="username_email">Username or Email</FormLabel>
            <Input type="text" id="username_email" />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="password">password</FormLabel>
            <Input type="password" id="password" />
          </FormRow>

          <div className="mt-4 flex flex-col gap-4">
            <div>
              <input
                type="checkbox"
                id="remember_user"
                name="remember_user"
                className="none mr-1"
              />
              <FormLabel htmlFor="remember_user">remember me</FormLabel>
            </div>
            <div className="w-[35%]">
              <Button size="small">login</Button>
            </div>
          </div>
        </form>
      </div>
      <span className="flex gap-2">
        <h5>have a coupon?</h5>
        <span
          className="cursor-pointer text-accent-500 underline"
          onClick={handleOpenCoupon}
        >
          click here to enter your code
        </span>
      </span>
      {/* apply coupon box */}
      <div
        className={clsx(
          "transition-max-height my-6 overflow-hidden border-2 border-dashed border-primary-100 px-4 py-6 duration-500 ease-in-out",
          openCoupon ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <FormRow>
          <Input type="text" placeholder="coupon code" />
        </FormRow>
        <Button size="small">apply coupon</Button>
      </div>
    </div>
  );
}

export default CheckoutCta;
