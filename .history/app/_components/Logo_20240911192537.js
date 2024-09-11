import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="block">
      <div className="relative h-[130px] w-[130px] md:h-[140px] md:w-[140px] lg:h-[150px] lg:w-[150px]">
        <Image
          src={logo}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 70px, (max-width: 1024px) 100px, 140px"
          alt="company logo logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
