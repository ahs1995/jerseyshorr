import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="block">
      <div className="relative h-[130px] w-[130px] lg:h-[140px] lg:w-[140px] xl:h-[150px] xl:w-[150px]">
        <Image
          src={logo}
          fill
          // style={{ objectFit: "contain" }}
          // sizes="(max-width: 768px) 70px, (max-width: 1024px) 100px, 140px"
          alt="company logo logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
