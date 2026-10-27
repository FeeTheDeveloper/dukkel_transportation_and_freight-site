import Image from "next/image";

// Canonical Dukeel logo (public/brand/dukeel-original-logo.png, 1536x1024,
// white background). The artwork is never redrawn or recoloured; these
// components only frame it with an overflow crop around the padding.
// dukeel-logo-960.webp is a straight downscale of the same file.
const SOURCE = { width: 1536, height: 1024 };
const FULL_CROP = { x: 280, y: 325, width: 956, height: 356 };
const MARK_CROP = { x: 280, y: 325, width: 332, height: 356 };

type Crop = typeof FULL_CROP;

type LogoProps = {
  className?: string;
  priority?: boolean;
};

function CroppedLogo({ crop, className = "", priority = false }: LogoProps & { crop: Crop }) {
  return (
    <span
      className={`relative inline-block align-middle overflow-hidden bg-white ${className}`.trim()}
      style={{ aspectRatio: `${crop.width} / ${crop.height}` }}
    >
      <Image
        alt="Dukeel Transportation & Freight Corporation"
        className="absolute max-w-none"
        height={SOURCE.height}
        priority={priority}
        src="/brand/dukeel-logo-960.webp"
        style={{
          width: `${(SOURCE.width / crop.width) * 100}%`,
          height: "auto",
          left: `${(-crop.x / crop.width) * 100}%`,
          top: `${(-crop.y / crop.height) * 100}%`
        }}
        unoptimized
        width={SOURCE.width}
      />
    </span>
  );
}

export function DukeelLogoFull(props: LogoProps) {
  return <CroppedLogo crop={FULL_CROP} {...props} />;
}

export function DukeelLogoMark(props: LogoProps) {
  return <CroppedLogo crop={MARK_CROP} {...props} />;
}
