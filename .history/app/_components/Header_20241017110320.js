import Logo from "./Logo";
import Searchbar from "./Searchbar";
import MenuButton from "./MenuButton";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import CartIcon from "./CartIcon";
import Link from "next/link";

function Header() {
  return (
    // header container
    <header className="flex items-center justify-between px-6 py-2 shadow-md lg:px-10 xl:px-[5rem]">
      <div className="flex items-center gap-x-8 md:hidden">
        <MenuButton />
        <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500" />
      </div>

      <div className="flex items-center justify-start">
        <Logo />
      </div>
      <div className="mx-4 hidden max-w-2xl flex-grow md:block">
        <Searchbar />
      </div>
      <div className="flex items-center gap-x-8 lg:gap-x-12">
        <CartIcon />
        <Link href={"/my-account"}>
          <UserIcon className="h-7 w-7 cursor-pointer text-primary-900 transition-colors duration-300 hover:text-accent-500" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
