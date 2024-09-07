import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/">
      <Image src={logo} height={140} width={140} alt="company logo logo" />
      hi ever
    </Link>
  );
}

export default Logo;
