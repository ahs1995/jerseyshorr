import Link from "next/link";
import Image from "next/image";
function Logo() {
  return (
    <Link href="/">
      <Image src="/public/next.svg" alt="company logo logo" />
    </Link>
  );
}

export default Logo;
