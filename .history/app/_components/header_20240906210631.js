import Logo from "./Logo";
// import { Heroicon } from "heroicons";
// // import { bars-3 } from "heroicons/icons";
import { HiMenu } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <HiMenu className="h-5 w-5 Red-500" />
      <Logo />
    </header>
  );
}

export default Header;
