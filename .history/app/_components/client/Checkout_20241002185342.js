import Link from "next/link";
import BillingForm from "../BillingForm";

import CartReview from "./CartReview";
import Coupons from "../Coupons";
import MiniCartPrice from "./MiniCartPrice";
import Button from "../Button";

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
      <div>
        <CartReview />
      </div>
      <div>
        {/* payment options */}
        <div className="mb-8 border-y-[1px] border-primary-50 py-4">
          <MiniCartPrice />
        </div>

        {/* pay button */}
        <Button size="large">pay now</Button>
      </div>
    </div>
  );
}

export default Checkout;
