// Photography under /media/dukeel is pre-encoded at these widths as
// `<name>-<width>.webp`. The loader maps a requested width to the smallest
// encoded file that covers it. Anything else is served as-is.
const encodedWidths = [640, 960, 1280, 1920];

type LoaderArgs = { src: string; width: number };

export default function imageLoader({ src, width }: LoaderArgs) {
  if (!src.startsWith("/media/dukeel/")) {
    return src;
  }

  const target = encodedWidths.find((encoded) => encoded >= width) ?? encodedWidths[encodedWidths.length - 1];

  return `${src}-${target}.webp`;
}
