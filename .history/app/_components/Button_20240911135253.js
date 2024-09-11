import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="rounded-md bg-accent-500 px-2 py-1 text-sm text-primary-50 shadow-sm shadow-primary-600 outline-0 md:text-base">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
