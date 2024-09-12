import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        src={logo}
        height={120}
        width={120}
        style={{ objectFit: "cover" }}
        alt="company logo logo"
      />
    </Link>
  );
}

export default Logo;
