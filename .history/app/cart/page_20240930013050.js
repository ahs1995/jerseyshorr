import { useSelector } from "react-redux";
import { getCart } from "../_lib/store/cartSlice";

function page() {
  const cartItems = useSelector(getCart);
  console.log(cartItems);
  return <div>cart contents</div>;
}

export default page;
