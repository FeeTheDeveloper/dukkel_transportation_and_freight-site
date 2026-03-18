type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span className={`eyebrow ${invert ? "border-white/20 bg-white/10 text-white" : ""}`.trim()}>{eyebrow}</span>
      ) : null}
      <h2 className={`section-title mt-5 ${invert ? "text-white" : ""}`.trim()}>{title}</h2>
      <p className={`section-copy mt-4 ${invert ? "text-white/75" : ""} ${isCentered ? "mx-auto" : ""}`.trim()}>
        {description}
      </p>
    </div>
  );
}
