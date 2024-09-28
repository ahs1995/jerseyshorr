import Link from "next/link";
import clsx from "clsx"; // Optional, for cleaner className handling

function Button({ children, path, size = "small", variant = "primary" }) {
  // Define size classes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-10 py-3 text-lg",
  };

  // Define variant classes
  const variantClasses = {
    primary:
      "bg-accent-500 text-accent-50 border-transparent shadow-sm shadow-primary-700",
    secondary: "bg-transparent text-accent-500 border-accent-500 border",
  };

  return (
    <div
      className={clsx(
        "rounded-md outline-0", // Common classes
        sizeClasses[size], // Dynamically set size classes
        variantClasses[variant], // Dynamically set variant classes
      )}
    >
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
