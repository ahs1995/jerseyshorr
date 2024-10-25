import Checkout from "../_components/client/Checkout";
import AccountLayout from "../_components/layouts/AccountLayout";

function page() {
  return (
    <AccountLayout title="checkout">
      <Checkout />
    </AccountLayout>
  );
}

export default page;
