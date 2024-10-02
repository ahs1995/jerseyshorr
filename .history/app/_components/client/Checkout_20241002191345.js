import Link from "next/link";
import BillingForm from "../BillingForm";

import CartReview from "./CartReview";
import Coupons from "../Coupons";
import MiniCartPrice from "./MiniCartPrice";
import Button from "../Button";
import { LockClosedIcon } from "@heroicons/react/24/solid";

function Checkout() {
  return (
    <div>
      {/* CTA */}
      <div className="mb-16 text-sm capitalize">
        <span className="flex gap-2">
          <h5>returning customer?</h5>
          <Link href="#" className="text-accent-500 underline">
            click here to login
          </Link>
        </span>
        <span className="flex gap-2">
          <h5>have a coupon?</h5>
          <Link href="#" className="text-accent-500 underline">
            click here to enter your code
          </Link>
        </span>
      </div>

      {/* Billing form */}
      <div className="mb-8">
        <BillingForm />
      </div>
      {/* Cart review */}
      <div className="mb-6">
        <CartReview />
      </div>
      <div>
        {/* payment options */}
        <div className="">
          <MiniCartPrice />
        </div>

        {/* pay button */}
        <Button size="large">pay now</Button>
      </div>
      {/* payment security info */}
      <div>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span>
            <LockClosedIcon className="h-4 w-4" />
          </span>
          <h5>secure checkout - SSL ecrypted</h5>
        </div>
        <p>
          Ensuring financial and personal details are secure during every
          transaction
        </p>
      </div>
    </div>
  );
}

export default Checkout;