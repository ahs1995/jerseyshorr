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
    <header className="flex items-center justify-between bg-primary-300 px-6">
      <div className="flex items-center gap-x-8">
        <Bars3Icon className="Red-500 h-7 w-7" />
        <MagnifyingGlassIcon className="Red-500 h-5 w-5" />
      </div>
      <Logo />
      <div className="flex items-center gap-x-8">
        <ShoppingBagIcon className="Red-500 h-7 w-7" />
        <UserIcon className="Red-500 h-7 w-7" />
      </div>
    </header>
  );
}

export default Header;
