import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-[60px] w-[180px] lg:h-[60px] lg:w-[220px] xl:h-[80px] xl:w-[260px]">
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
