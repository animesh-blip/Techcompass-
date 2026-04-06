import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  light?: boolean;
  variant?: "horizontal" | "stacked" | "icon";
}

const variants = {
  horizontal: { src: "/images/logo-horizontal.svg", width: 520, height: 120 },
  stacked: { src: "/images/logo-stacked.svg", width: 300, height: 280 },
  icon: { src: "/images/logo-icon.svg", width: 200, height: 200 },
};

export default function Logo({
  className,
  light = false,
  variant = "horizontal",
}: LogoProps) {
  const { src, width, height } = variants[variant];

  return (
    <Link href="/" className={clsx("flex items-center", className)}>
      <Image
        src={src}
        alt="TechCompass Services"
        width={width}
        height={height}
        className={clsx(
          "h-auto w-auto",
          variant === "horizontal" && "max-h-10 md:max-h-12",
          variant === "stacked" && "max-h-24",
          variant === "icon" && "max-h-10",
          light && "brightness-[2] contrast-125"
        )}
        priority={variant === "horizontal"}
      />
    </Link>
  );
}
