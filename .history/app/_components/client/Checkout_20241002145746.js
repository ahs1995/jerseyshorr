import Link from "next/link";
import BillingForm from "../BillingForm";

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
        <h3 className="mb-6 text-lg font-semibold capitalize">
          billing details
        </h3>
        <BillingForm />
      </div>
      {/* Cart review */}
      <div>
        <h4 className="Capitalize text-lg font-semibold">Review your cart</h4>
      </div>

      {/* payment options */}

      {/* pay button */}
    </div>
  );
}

export default Checkout;
