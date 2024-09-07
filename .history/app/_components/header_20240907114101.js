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
    <header>
      <Bars3Icon className="h-7  Red-500 w-7" />
      <MagnifyingGlassIcon className="h-5 w-5 Red-500" />
      <Logo />
      <ShoppingBagIcon className="h-7 w-7 Red-500" />
      <UserIcon className="h-7 w-7 Red-500" />
    </header>
  );
}

export default Header;
