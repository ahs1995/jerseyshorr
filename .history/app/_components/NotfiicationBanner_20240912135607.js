"use client";

import { TypeAnimation } from "react-type-animation";
function NotfiicationBanner() {
  return (
    <div className="bg-accent-500 text-accent-50">
      <div className="py-2 text-center">
        <TypeAnimation
          sequence={[
            "Buy 3 jerseys, get flat 250 off. Use Coupon code B3F250",
            5000,
            "Buy 1 and use code HIFIVE to get 5% off",
            5000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          omitDeletionAnimation={true}
        />
      </div>
    </div>
  );
}

export default NotfiicationBanner;