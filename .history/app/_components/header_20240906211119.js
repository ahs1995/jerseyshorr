import Logo from "./Logo";
// import { Heroicon } from "heroicons";
// // import { bars-3 } from "heroicons/icons";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <Bars3Icon className="h-7 w-7 Red-500" />
      <MagnifyingGlassIcon className="h-6 w-6 Red-500" />
      <Logo />
    </header>
  );
}

export default Header;
