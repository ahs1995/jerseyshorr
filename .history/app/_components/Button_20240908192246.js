import Link from "next/link";

function Button({ children, path }) {
  return (
    <div>
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
