import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="rounded-md bg-accent-700 px-2 py-1 text-sm text-primary-100 outline-0">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
