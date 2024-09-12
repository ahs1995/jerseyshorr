"use client";

import { TypeAnimation } from "react-type-animation";
function NotfiicationBanner() {
  return (
    <div className="bg-accent-500 text-accent-50">
      <div className="py-2 text-center">
        <TypeAnimation
          sequence={[
            "Buy 3 jerseys, get flat 250 off. Use Coupon code B3F250",
            1000,
            "Buy 1 and use code HIFIVE to get 5% off",
            1000,
          ]}
          wrapper="span"
          speed={100}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default NotfiicationBanner;
