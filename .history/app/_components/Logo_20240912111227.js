import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="block">
      <div className="relative">
        <Image
          src={logo}
          height={120}
          width={120}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 70px, (max-width: 1024px) 100px, 140px"
          alt="company logo logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
