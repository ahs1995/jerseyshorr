import Link from "next/link";
import BillingForm from "../BillingForm";
import { getCart } from "@/app/_lib/store/cartSlice";
import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector(getCart);
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
      <div>
        <h3 className="text-md font-semibold uppercase">Review your cart</h3>
        <div>
          {cartItems.map((item) => (
            <div key={item.jerseyId}>
              {/* item image */}
              <span>{item.image}</span>
              {/* item details */}
              <div>
                <h5>{item.jerseyName}</h5>
                <span>{item.quantity}</span>
              </div>
              {/* item total price */}
              <span>{item.totalPrice}</span>
            </div>
          ))}
        </div>
      </div>

      {/* payment options */}

      {/* pay button */}
    </div>
  );
}

export default Checkout;
