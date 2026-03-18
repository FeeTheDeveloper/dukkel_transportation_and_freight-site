import { useId } from "react";

type LogoProps = {
  className?: string;
};

export function DukeelLogoFull({ className = "" }: LogoProps) {
  const shieldId = useId();
  const roadId = useId();

  return (
    <svg
      aria-label="Dukeel Transportation and Freight Corporation"
      className={className}
      role="img"
      viewBox="0 0 980 260"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={shieldId} x1="96" x2="254" y1="58" y2="232" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7EC1EE" />
          <stop offset="1" stopColor="#1F5A8C" />
        </linearGradient>
        <linearGradient id={roadId} x1="57" x2="343" y1="194" y2="122" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7931E" />
          <stop offset="1" stopColor="#FF9D00" />
        </linearGradient>
      </defs>

      <path d="M170 18 50 49v75c0 71 47 123 120 136 73-13 120-65 120-136V49L170 18Z" fill="#123A63" />
      <path d="M170 38 76 61v60c0 57 35 98 94 113 59-15 94-56 94-113V61L170 38Z" fill="#FFFFFF" />
      <path d="M170 70 102 87v38c0 44 24 76 68 94 44-18 68-50 68-94V87L170 70Z" fill={`url(#${shieldId})`} />
      <path d="M170 70 102 87v38c0 44 24 76 68 94V70Z" fill="#4E94CF" />
      <path d="M124 108h54c41 0 66 20 66 57 0 38-25 59-66 59h-54l14-44-8-44-6-18Z" fill="#123A63" />
      <path d="M154 125h23c24 0 38 13 38 40 0 26-14 40-38 40h-23l8-40-8-40Z" fill="#FFFFFF" />
      <path
        d="M57 185c48-16 102-25 159-28 52-3 87-14 126-42"
        fill="none"
        stroke={`url(#${roadId})`}
        strokeLinecap="round"
        strokeWidth="24"
      />
      <path
        d="m312 104 34 10-22 29"
        fill="none"
        stroke="#F7931E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="18"
      />
      <path
        d="M58 203c61-15 122-21 183-19 30 1 53 7 70 14"
        fill="none"
        stroke="#F7931E"
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path d="M170 219c24-12 41-30 54-55l24 9c-13 29-34 54-78 73v-27Z" fill="#F7931E" />

      <text
        fill="#123A63"
        fontFamily="Barlow, Arial, sans-serif"
        fontSize="108"
        fontWeight="700"
        letterSpacing="1.5"
        x="390"
        y="126"
      >
        DUKEEL
      </text>
      <text
        fill="#F7931E"
        fontFamily="Barlow, Arial, sans-serif"
        fontSize="39"
        fontWeight="700"
        letterSpacing="0.8"
        x="392"
        y="182"
      >
        TRANSPORTATION &amp; FREIGHT
      </text>
      <text
        fill="#1F7FC5"
        fontFamily="Barlow, Arial, sans-serif"
        fontSize="33"
        fontWeight="700"
        letterSpacing="2.4"
        x="392"
        y="228"
      >
        CORPORATION
      </text>
      <path d="M636 214h246" stroke="#6FA3C8" strokeLinecap="round" strokeWidth="6" />
    </svg>
  );
}

export function DukeelLogoMark({ className = "" }: LogoProps) {
  const shieldId = useId();
  const roadId = useId();

  return (
    <svg aria-label="Dukeel mark" className={className} role="img" viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={shieldId} x1="96" x2="254" y1="58" y2="232" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7EC1EE" />
          <stop offset="1" stopColor="#1F5A8C" />
        </linearGradient>
        <linearGradient id={roadId} x1="57" x2="343" y1="194" y2="122" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7931E" />
          <stop offset="1" stopColor="#FF9D00" />
        </linearGradient>
      </defs>

      <path d="M170 18 50 49v75c0 71 47 123 120 136 73-13 120-65 120-136V49L170 18Z" fill="#123A63" />
      <path d="M170 38 76 61v60c0 57 35 98 94 113 59-15 94-56 94-113V61L170 38Z" fill="#FFFFFF" />
      <path d="M170 70 102 87v38c0 44 24 76 68 94 44-18 68-50 68-94V87L170 70Z" fill={`url(#${shieldId})`} />
      <path d="M170 70 102 87v38c0 44 24 76 68 94V70Z" fill="#4E94CF" />
      <path d="M124 108h54c41 0 66 20 66 57 0 38-25 59-66 59h-54l14-44-8-44-6-18Z" fill="#123A63" />
      <path d="M154 125h23c24 0 38 13 38 40 0 26-14 40-38 40h-23l8-40-8-40Z" fill="#FFFFFF" />
      <path
        d="M57 185c48-16 102-25 159-28 52-3 87-14 126-42"
        fill="none"
        stroke={`url(#${roadId})`}
        strokeLinecap="round"
        strokeWidth="24"
      />
      <path
        d="m312 104 34 10-22 29"
        fill="none"
        stroke="#F7931E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="18"
      />
      <path
        d="M58 203c61-15 122-21 183-19 30 1 53 7 70 14"
        fill="none"
        stroke="#F7931E"
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path d="M170 219c24-12 41-30 54-55l24 9c-13 29-34 54-78 73v-27Z" fill="#F7931E" />
    </svg>
  );
}
