import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="relative h-[500px] w-[500px]">
      <image src={logo} alt="company logo logo" />
    </Link>
  );
}

export default Logo;
