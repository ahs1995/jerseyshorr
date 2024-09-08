import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="rounded-md bg-accent-700 px-2 text-primary-100">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
