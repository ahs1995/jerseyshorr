import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="relative h-auto w-auto">
      <image src={logo} alt="company logo logo" className="h-auto w-auto" />
    </Link>
  );
}

export default Logo;
