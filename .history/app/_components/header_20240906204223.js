import Logo from "./Logo";
import { Heroicon } from "heroicons";
import { mail } from "heroicons/icons";

function Header() {
  return (
    <header>
      {/* <Heroicon name="bars-3" size={32} color="#efef34" /> */}

      <Logo />
    </header>
  );
}

export default Header;
