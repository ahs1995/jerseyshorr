import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-[60px] w-[180px] sm:h-[70px] sm:w-[220px] md:h-[80px] md:w-[260px]">
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
