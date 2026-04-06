interface FloatingShapesProps {
  variant?: "hero" | "section" | "dark";
}

export default function FloatingShapes({ variant = "section" }: FloatingShapesProps) {
  const isHero = variant === "hero";
  const isDark = variant === "dark";

  const opacity = isHero ? "opacity-20" : isDark ? "opacity-10" : "opacity-[0.07]";
  const greenColor = isDark ? "bg-brand-green" : "bg-brand-green";
  const blueColor = isDark ? "bg-blue-400" : "bg-navy-300";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large floating circle */}
      <div
        className={`absolute ${isHero ? "-top-20 -right-20" : "top-10 right-10"} w-72 h-72 ${greenColor} rounded-full blur-3xl ${opacity} animate-float`}
      />
      {/* Small floating circle */}
      <div
        className={`absolute ${isHero ? "bottom-20 -left-10" : "bottom-10 left-10"} w-48 h-48 ${blueColor} rounded-full blur-3xl ${opacity} animate-float-slow`}
      />
      {/* Diamond shape */}
      <div
        className={`absolute ${isHero ? "top-1/3 right-1/4" : "top-1/4 right-1/3"} w-16 h-16 ${greenColor} rotate-45 rounded-md blur-sm ${opacity} animate-float-delayed`}
      />
      {/* Small accent circle */}
      <div
        className={`absolute ${isHero ? "bottom-1/3 left-1/4" : "bottom-1/4 left-1/4"} w-8 h-8 ${greenColor} rounded-full blur-sm ${opacity} animate-float`}
        style={{ animationDelay: "2s" }}
      />
      {/* Hexagon-like shape */}
      <div
        className={`absolute ${isHero ? "top-2/3 right-10" : "top-1/2 right-20"} w-24 h-24 ${blueColor} rounded-2xl rotate-12 blur-xl ${opacity} animate-float-slow`}
        style={{ animationDelay: "3s" }}
      />
      {isHero && (
        <>
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ${greenColor} rounded-full blur-[120px] opacity-[0.08]`}
          />
          <div
            className={`absolute bottom-0 right-1/4 w-32 h-32 bg-amber-400 rounded-full blur-2xl opacity-10 animate-float-delayed`}
            style={{ animationDelay: "4s" }}
          />
        </>
      )}
    </div>
  );
}
