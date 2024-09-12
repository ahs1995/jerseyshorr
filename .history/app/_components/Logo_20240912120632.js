import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-[50px] w-[150px] lg:h-[65px] lg:w-[160px]">
        <Image
          src={logo}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
          alt="company logo logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
