import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="relative block h-[5rem] w-[5rem]">
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
