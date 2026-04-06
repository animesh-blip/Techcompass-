import Link from "next/link";
import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light = false }: LogoProps) {
  return (
    <Link href="/" className={clsx("flex items-center gap-2", className)}>
      {/* Globe Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer ring */}
        <circle cx="50" cy="50" r="45" fill="#E8EBF0" />
        {/* Globe */}
        <circle cx="50" cy="50" r="40" fill="#1B2A4A" />
        {/* Continents */}
        <ellipse cx="35" cy="35" rx="12" ry="15" fill="#7CB342" opacity="0.9" />
        <ellipse cx="60" cy="30" rx="10" ry="12" fill="#7CB342" opacity="0.9" />
        <ellipse cx="55" cy="60" rx="8" ry="10" fill="#7CB342" opacity="0.9" />
        <ellipse cx="35" cy="65" rx="6" ry="8" fill="#7CB342" opacity="0.9" />
        {/* Compass needle */}
        <line x1="25" y1="75" x2="75" y2="25" stroke="white" strokeWidth="2.5" />
        <line x1="27" y1="73" x2="73" y2="27" stroke="#F9A825" strokeWidth="2" />
        {/* Center dot */}
        <circle cx="50" cy="50" r="3" fill="white" />
        {/* Decorative squares */}
        <rect x="78" y="18" width="6" height="6" fill="#F9A825" transform="rotate(15 81 21)" />
        <rect x="85" y="25" width="5" height="5" fill="#1B2A4A" transform="rotate(15 87 27)" />
        <rect x="10" y="75" width="4" height="4" fill="#7CB342" transform="rotate(15 12 77)" />
        <rect x="5" y="70" width="3" height="3" fill="#1B2A4A" transform="rotate(15 6.5 71.5)" />
      </svg>
      {/* Text */}
      <span className="text-xl md:text-2xl font-bold font-heading tracking-tight">
        <span className={light ? "text-white" : "text-navy-500"}>Tech</span>
        <span className="text-brand-green">Compass</span>
      </span>
    </Link>
  );
}
