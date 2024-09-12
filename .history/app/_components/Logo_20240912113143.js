import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logo}
        width={130}
        height={130}
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 70px, (max-width: 1024px) 100px, 140px"
        alt="company logo logo"
      />
    </Link>
  );
}

export default Logo;
