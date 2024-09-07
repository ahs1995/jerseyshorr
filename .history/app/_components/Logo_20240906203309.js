import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/">
      <Image src={logo} height={150} width={150} alt="company logo logo" />
    </Link>
  );
}

export default Logo;
