import Link from "next/link";

function Checkout() {
  return (
    <div>
      <div>
        <span>
          <h5>returning customer?</h5>
          <Link href="#">click here to login</Link>
        </span>
        <span>
          <h5>have a coupoon?</h5>
          <Link href="#">click here to enter your code</Link>
        </span>
      </div>
    </div>
  );
}

export default Checkout;
