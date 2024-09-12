function NotfiicationBanner() {
  return (
    <div className="bg-accent-500 text-accent-50">
      <div
        className="animate-slide-left-right py-2 text-center"
        style={{ animation: "slide-left-right 10s linear infinite" }}
      >
        <span className="inline-block">
          {" "}
          Buy 3 jerseys, get flat 250 off. Use Coupon code B3F250
        </span>
      </div>
    </div>
  );
}

export default NotfiicationBanner;
