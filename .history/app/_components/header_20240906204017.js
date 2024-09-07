import Logo from "./Logo";
import { Heroicon } from "heroicons";

function Header() {
  return (
    <header>
      <Heroicon name="bars-3" color="#efef34" />
      <Logo />
    </header>
  );
}

export default Header;
