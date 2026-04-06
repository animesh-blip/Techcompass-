import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  light?: boolean;
  variant?: "horizontal" | "stacked" | "icon";
}

const variants = {
  horizontal: { src: "/images/logo-horizontal.png", width: 220, height: 50 },
  stacked: { src: "/images/logo-stacked.png", width: 150, height: 80 },
  icon: { src: "/images/logo-icon.png", width: 40, height: 40 },
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
          variant === "stacked" && "max-h-20",
          variant === "icon" && "max-h-10",
          light && "brightness-200 contrast-125"
        )}
        priority={variant === "horizontal"}
      />
    </Link>
  );
}
