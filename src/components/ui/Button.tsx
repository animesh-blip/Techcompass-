import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-navy-500 text-white hover:bg-navy-600 shadow-lg hover:shadow-xl",
  secondary: "bg-brand-green text-white hover:bg-brand-green-dark shadow-lg hover:shadow-xl",
  outline: "border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white",
  ghost: "text-navy-500 hover:bg-navy-50 underline-offset-4 hover:underline",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 font-heading",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
