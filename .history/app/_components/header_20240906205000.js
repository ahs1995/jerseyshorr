import Logo from "./Logo";
import { Heroicon } from "heroicons";
// import { bars-3 } from "heroicons/icons";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <ArrowDownIcon className="h-5 w-5" />
      <Logo />
    </header>
  );
}

export default Header;
