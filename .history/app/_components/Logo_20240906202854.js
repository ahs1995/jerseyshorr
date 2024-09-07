import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo";
function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="company logo logo" />
      <span>Company name</span>
    </Link>
  );
}

export default Logo;
