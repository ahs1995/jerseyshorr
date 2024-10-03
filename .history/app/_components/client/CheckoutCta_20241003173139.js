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
    setOpenCoupon(false);
    setOpenLogin((prev) => !prev);
  }

  function handleOpenCoupon() {
    setOpenLogin(false);
    setOpenCoupon((prev) => !prev);
  }

  return (
    <div className="bg-white mx-auto max-w-[500px] px-4">
      {/* Text contents */}
      <div className="mb-6 flex flex-col gap-2 text-center text-sm text-primary-500">
        <h5>Returning customer? Please login below</h5>
        <h5>You can apply a coupon to avail extra discount</h5>
      </div>

      <div className="grid grid-cols-2 gap-4 px-2">
        <Button size="medium" variant="secondary" onClick={handleOpenLogin}>
          Login
        </Button>
        <Button size="medium" variant="secondary" onClick={handleOpenCoupon}>
          Apply Coupon
        </Button>
      </div>

      {/* Login CTA Box */}
      <div
        className={clsx(
          "transition-max-height bg-white mt-6 overflow-hidden border-2 border-dashed border-primary-100 duration-500 ease-in-out",
          openLogin ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-4 py-6">
          <form className="flex flex-col gap-4">
            <FormRow>
              <FormLabel htmlFor="username_email">Username or Email</FormLabel>
              <Input type="text" id="username_email" />
            </FormRow>

            <FormRow>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input type="password" id="password" />
            </FormRow>

            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                id="remember_user"
                name="remember_user"
                className="mr-1"
              />
              <FormLabel htmlFor="remember_user">Remember me</FormLabel>
            </div>

            <div className="mt-4 w-full text-center">
              <Button size="medium">Login</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Apply Coupon Box */}
      <div
        className={clsx(
          "transition-max-height bg-white flex flex-col gap-6 overflow-hidden border-2 border-dashed border-primary-100 duration-500 ease-in-out",
          openCoupon ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-6 px-4 py-6">
          <Input type="text" placeholder="Coupon Code" />
          <div className="w-full text-center">
            <Button size="medium">Apply Coupon</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCta;
