import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-[60px] w-[60px] md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px]"></div>
      <Image
        src={logo}
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 60px, (max-width: 1024px) 70px, 80px"
        alt="company logo logo"
      />
    </Link>
  );
}

export default Logo;
