import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="border-r-2 bg-accent-700 px-2 text-primary-100">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
