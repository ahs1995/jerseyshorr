import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="relative block h-auto w-auto">
      <Image
        src={logo}
        fill
        style={{ objectFit: "contain" }}
        alt="company logo logo"
      />
    </Link>
  );
}

export default Logo;
