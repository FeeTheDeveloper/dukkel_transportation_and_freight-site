import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}





export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M21 16.2v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18 19.5 19.5 0 0 1 4 11.8 19.8 19.8 0 0 1 2.8 5.2 2 2 0 0 1 4.8 3h3a2 2 0 0 1 2 1.7l.4 2.7a2 2 0 0 1-.6 1.7l-1.3 1.3a16 16 0 0 0 5.4 5.4l1.3-1.3a2 2 0 0 1 1.7-.6l2.7.4A2 2 0 0 1 21 16.2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

