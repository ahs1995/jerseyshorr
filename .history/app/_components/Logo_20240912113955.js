import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-[130px] w-[130px] lg:h-[140px] lg:w-[140px] xl:h-[150px] xl:w-[150px]"></div>
      <Image
        src={logo}
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 130px, (max-width: 1024px) 140px, 150px"
        alt="company logo logo"
      />
    </Link>
  );
}

export default Logo;
