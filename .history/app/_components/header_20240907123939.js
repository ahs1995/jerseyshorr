import Logo from "./Logo";
// import { Heroicon } from "heroicons";
// // import { bars-3 } from "heroicons/icons";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="flex items-start justify-between bg-primary-300">
      <Bars3Icon className="Red-500 h-7 w-7" />
      <MagnifyingGlassIcon className="Red-500 h-5 w-5" />
      <Logo />
      <ShoppingBagIcon className="Red-500 h-7 w-7" />
      <UserIcon className="Red-500 h-7 w-7" />
    </header>
  );
}

export default Header;
