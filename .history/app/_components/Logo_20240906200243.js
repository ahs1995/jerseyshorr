import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      <img src="public/next.svg" alt="company logo logo" />
      <span>Company name</span>
    </Link>
  );
}

export default Logo;
