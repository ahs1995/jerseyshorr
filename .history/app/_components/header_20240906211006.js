import Logo from "./Logo";
// import { Heroicon } from "heroicons";
// // import { bars-3 } from "heroicons/icons";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <Bars3Icon className="h-10 w-10 Red-500" />
      <Logo />
    </header>
  );
}

export default Header;
