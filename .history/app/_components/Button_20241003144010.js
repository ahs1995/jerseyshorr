import Link from "next/link";
import clsx from "clsx"; // Optional, for cleaner className handling

function Button({
  children,
  path,
  size = "small",
  variant = "primary",
  onClick,
}) {
  // Define size classes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-6 py-2 text-sm ",
    large: "px-6 py-3 text-sm uppercase",
  };

  // Define variant classes
  const variantClasses = {
    primary:
      "bg-accent-500 text-accent-50 border-transparent shadow-sm shadow-primary-700 text-center ",
    secondary:
      " text-primary-800 border-[1px] border-accent-400 shadow-primary-700 text-center  ",
  };

  if (onClick) {
    return (
      <div
        className={clsx(
          "cursor-pointer rounded-md outline-0", // Common classes
          sizeClasses[size], // Dynamically set size classes
          variantClasses[variant], // Dynamically set variant classes
        )}
      >
        <button href={`${path}`} onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "cursor-pointer rounded-md outline-0", // Common classes
        sizeClasses[size], // Dynamically set size classes
        variantClasses[variant], // Dynamically set variant classes
      )}
    >
      <Link href={`${path}`}>{children}</Link>
    </div>
  );
}

export default Button;
