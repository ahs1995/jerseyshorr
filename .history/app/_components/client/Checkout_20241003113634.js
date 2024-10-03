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
      <h2 className="text-md mb-6 font-semibold uppercase text-primary-800 xl:mb-10 xl:text-center xl:text-2xl">
        checkout
      </h2>
      {/* first column */}
      <div>
        {/* CTA */}
        <CheckoutCta />

        {/* Billing form */}
        <div className="mb-8">
          <BillingForm />
        </div>
      </div>
      {/* second column */}
      <div>
        {/* Cart review */}
        <div className="mb-6">
          <CartReview />
        </div>
        <div className="mb-8">
          {/* payment options */}
          <div className="">
            <MiniCartPrice />
          </div>

          {/* pay button */}
          <Button size="large">pay now</Button>
        </div>
        {/* payment security info */}
        <div className="mx-auto w-[300px] text-center">
          <div className="mb-3 flex items-start justify-center gap-2">
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
  );
}

export default Checkout;
