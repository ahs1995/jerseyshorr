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
    <div className="bg-white-50 px-2 py-4">
      {/* text contents */}
      <div className="mb-4 text-sm">
        <h5>returning customer? Please login below</h5>
        <h5>You can apply coupon to avail extra discount</h5>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-4 px-6">
        <div>
          <Button size="small" variant="secondary" onClick={handleOpenLogin}>
            login
          </Button>
          {/* login cta box */}
          <div
            className={clsx(
              "transition-max-height overflow-hidden border-2 border-dashed border-primary-100 duration-500 ease-in-out",
              openLogin ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="px-4 py-6">
              <form className="flex flex-col gap-4">
                <FormRow>
                  <FormLabel htmlFor="username_email">
                    Username or Email
                  </FormLabel>
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
          </div>
        </div>
        <div>
          <Button size="small" variant="secondary">
            apply coupon
          </Button>
        </div>
      </div>
    </div>

    // <div className="mb-8 flex flex-col gap-2 text-xs capitalize text-primary-800">
    //   <div className="relative flex gap-2">
    //     <h5>returning customer?</h5>
    //     <span
    //       className="cursor-pointer text-accent-500 underline"
    //       onClick={handleOpenLogin}
    //     >
    //       click here to login
    //     </span>
    //   </div>
    //   {/* login cta box */}
    //   <div
    //     className={clsx(
    //       "transition-max-height overflow-hidden border-2 border-dashed border-primary-100 duration-500 ease-in-out",
    //       openLogin ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
    //     )}
    //   >
    //     <div className="px-4 py-6">
    //       <form className="flex flex-col gap-4">
    //         <FormRow>
    //           <FormLabel htmlFor="username_email">Username or Email</FormLabel>
    //           <Input type="text" id="username_email" />
    //         </FormRow>

    //         <FormRow>
    //           <FormLabel htmlFor="password">password</FormLabel>
    //           <Input type="password" id="password" />
    //         </FormRow>

    //         <div className="mt-4 flex flex-col gap-4">
    //           <div>
    //             <input
    //               type="checkbox"
    //               id="remember_user"
    //               name="remember_user"
    //               className="none mr-1"
    //             />
    //             <FormLabel htmlFor="remember_user">remember me</FormLabel>
    //           </div>
    //           <div className="w-[35%]">
    //             <Button size="small">login</Button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   {/* coupon section */}
    //   <div>
    //     <span className="flex gap-2">
    //       <h5>have a coupon?</h5>
    //       <span
    //         className="cursor-pointer text-accent-500 underline"
    //         onClick={handleOpenCoupon}
    //       >
    //         click here to enter your code
    //       </span>
    //     </span>
    //     {/* apply coupon box */}
    //     <div
    //       className={clsx(
    //         "transition-max-height flex flex-col gap-6 overflow-hidden border-2 border-dashed border-primary-100 duration-500 ease-in-out",
    //         openCoupon ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
    //       )}
    //     >
    //       <div className="flex flex-col gap-6 px-4 py-8">
    //         <Input type="text" placeholder="coupon code" />
    //         <div className="mx-auto w-[40%]">
    //           <Button size="small">apply coupon</Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CheckoutCta;
