import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="self-start">
      <Image src={logo} height={140} width={140} alt="company logo logo" />
    </Link>
  );
}

export default Logo;
