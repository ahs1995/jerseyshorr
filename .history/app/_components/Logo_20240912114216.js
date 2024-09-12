import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative aspect-square w-[50px] md:w-[60px] lg:w-[70px]">
        <Image
          src={logo}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 50px, (max-width: 1024px) 60px, 70px"
          alt="company logo logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
