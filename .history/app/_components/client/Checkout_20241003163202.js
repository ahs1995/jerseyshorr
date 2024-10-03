import Link from "next/link";
import BillingForm from "../BillingForm";

import CartReview from "./CartReview";
import Coupons from "../Coupons";
import MiniCartPrice from "./MiniCartPrice";
import Button from "../Button";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import CheckoutCta from "./CheckoutCta";

function Checkout() {
  return (
    <div>
      {/* heading */}
      <div className="mb-6">
        <h2 className="text-center text-xl font-bold uppercase text-primary-800 xl:mb-10 xl:text-2xl">
          checkout
        </h2>
      </div>

      <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* first column */}
        <div>
          {/* CTA */}
          <div className="mb-8">
            <CheckoutCta />
          </div>

          {/* Billing form */}
          <div className="mb-8 md:mx-auto md:max-w-[640px] lg:max-w-[500px]">
            <BillingForm />
          </div>
        </div>
        {/* second column */}
        <div className="md:flex md:justify-between lg:max-w-[450px] lg:flex-col lg:justify-start">
          {/* c_first column */}
          <div>
            {/* Cart review */}
            <div className="mb-6">
              <CartReview />
            </div>
          </div>
          {/* c_second column */}
          <div className="md:flex md:flex-col">
            <div className="mb-8">
              {/* payment options */}
              <div className="">
                <MiniCartPrice />
              </div>

              {/* pay button */}
              <Button size="large">pay now</Button>
            </div>
            {/* payment security info */}
            <div className="mx-auto w-[300px] text-center md:mt-auto md:text-left lg:mx-0">
              <div className="mb-3 flex items-start justify-center gap-2 md:justify-start">
                <span>
                  <LockClosedIcon className="h-4 w-4 text-primary-600" />
                </span>
                <h5 className="text-sm font-semibold text-primary-800">
                  secure checkout - SSL ecrypted
                </h5>
              </div>
              <p className="text-xs text-primary-400">
                Ensuring financial and personal details are secure during every
                transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
