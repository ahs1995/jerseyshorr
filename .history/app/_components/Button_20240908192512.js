import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="w-auto bg-accent-800">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
