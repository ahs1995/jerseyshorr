import Logo from "./Logo";
import Searchbar from "./Searchbar";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    // header container
    <header className="flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center gap-x-8 md:hidden">
        <Bars3Icon className="Red-500 stroke-5 h-7 w-7 cursor-pointer transition-colors duration-300 hover:text-accent-500" />
        <MagnifyingGlassIcon className="Red-500 h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-accent-500" />
      </div>
      <Logo />
      <div>
        <Searchbar />
      </div>
      <div className="flex items-center gap-x-8">
        <ShoppingBagIcon className="Red-500 h-7 w-7 cursor-pointer transition-colors duration-300 hover:text-accent-500" />
        <UserIcon className="Red-500 h-7 w-7 cursor-pointer transition-colors duration-300 hover:text-accent-500" />
      </div>
    </header>
  );
}

export default Header;
