import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="rounded-md bg-accent-700 px-2 py-1 text-sm text-primary-50 shadow-md shadow-primary-700 outline-0 md:text-base">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
