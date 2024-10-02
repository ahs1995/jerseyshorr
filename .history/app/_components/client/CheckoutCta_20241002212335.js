"use client"

function CheckoutCta() {
  return (
    <div className="mb-16 flex flex-col gap-4 text-xs capitalize text-primary-800">
      <span className="flex gap-2">
        <h5>returning customer?</h5>
        <span className="text-accent-500 underline" onClick={}>click here to login</span>
      </span>
      <span className="flex gap-2">
        <h5>have a coupon?</h5>
        <span href="#" className="text-accent-500 underline">
          click here to enter your code
        </span>
      </span>
    </div>
  );
}

export default CheckoutCta;
