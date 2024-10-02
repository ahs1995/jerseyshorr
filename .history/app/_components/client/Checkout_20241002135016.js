import Link from "next/link";
import BillingForm from "../BillingForm";

function Checkout() {
  return (
    <div>
      {/* CTA */}
      <div className="mb-12 text-sm capitalize">
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
      <div>
        <BillingForm />
      </div>
    </div>
  );
}

export default Checkout;
