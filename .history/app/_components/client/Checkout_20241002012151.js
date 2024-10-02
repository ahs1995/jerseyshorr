import Link from "next/link";

function Checkout() {
  return (
    <div>
      <div className="text-sm">
        <span className="flex gap-4">
          <h5>returning customer?</h5>
          <Link href="#" className="text-accent-500">
            click here to login
          </Link>
        </span>
        <span className="flex">
          <h5>have a coupoon?</h5>
          <Link href="#" className="text-accent-500">
            click here to enter your code
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Checkout;
