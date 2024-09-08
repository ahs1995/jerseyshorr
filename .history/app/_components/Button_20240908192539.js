import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="bg-accent-800 text-primary-100">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
