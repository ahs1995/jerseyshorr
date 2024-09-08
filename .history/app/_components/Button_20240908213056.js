import Link from "next/link";

function Button({ children, path }) {
  return (
    <div className="flex place-items-center rounded-sm bg-accent-700 px-2 text-primary-100 outline-0">
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
