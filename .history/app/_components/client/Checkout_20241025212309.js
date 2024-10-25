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
    <div className="grid grid-rows-[auto_1fr] gap-2 lg:justify-center">
      {/* content */}
      <div className="grid grid-cols-1 justify-between lg:grid-cols-[1fr_1fr]">
        {/* first column */}
        <div>
          {/* CTA */}
          <div className="mb-8">
            <CheckoutCta />
          </div>

          {/* Billing form */}
          <div className="mb-8 md:mx-auto md:max-w-[600px]">
            <BillingForm />
          </div>
        </div>
        {/* second column */}
        <div className="md:flex md:justify-center md:gap-16 lg:flex-col lg:items-end lg:justify-start lg:gap-8">
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
            <div className="mx-auto w-[300px] text-center md:text-left lg:mx-0">
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
