import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="block h-auto w-auto">
      <Image src={logo} fill alt="company logo logo" />
    </Link>
  );
}

export default Logo;
