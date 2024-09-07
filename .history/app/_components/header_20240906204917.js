import Logo from "./Logo";
import { Heroicon } from "heroicons";
// import { bars-3 } from "heroicons/icons";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <Heroicon name="bars-3" size={200} color="#efef34" />
      <ArrowDownIcon />
      <Logo />
    </header>
  );
}

export default Header;
