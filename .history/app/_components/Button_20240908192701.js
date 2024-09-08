import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="bg-accent-700 text-primary-100">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
