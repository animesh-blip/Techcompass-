import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={clsx("mb-12", centered && "text-center")}>
      <h2
        className={clsx(
          "text-3xl md:text-4xl font-bold font-heading mb-4",
          light ? "text-white" : "text-navy-500"
        )}
      >
        {title}
      </h2>
      <div
        className={clsx(
          "w-20 h-1 bg-brand-green rounded-full mb-6",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={clsx(
            "text-lg max-w-3xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
