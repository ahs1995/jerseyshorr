import Link from "next/link";
import BillingForm from "../BillingForm";

import CartReview from "./CartReview";

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
        <h3 className="text-md mb-6 font-semibold uppercase">
          billing details
        </h3>
        <BillingForm />
      </div>
      {/* Cart review */}
      <CartReview />

      {/* payment options */}

      {/* pay button */}
    </div>
  );
}

export default Checkout;
