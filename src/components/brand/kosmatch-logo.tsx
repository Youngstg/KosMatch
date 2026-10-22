import React from "react";

export type KosMatchLogoProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  rounded?: boolean;
};

export function KosMatchLogo({
  size = 38,
  className = "",
  style,
  rounded = true,
}: KosMatchLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      className={className}
      style={{
        borderRadius: rounded ? `${Math.round(size * 0.24)}px` : undefined,
        display: "block",
        flexShrink: 0,
        ...style,
      }}
      aria-label="KosMatch Logo"
      role="img"
    >
      <rect width="1024" height="1024" fill="#121212" rx="160" />
      {/* Letter K in crisp white forming the left gable roof & wall */}
      <path
        d="M 573,305 L 507,268 L 243,441 L 244,746 L 326,745 L 326,652 L 350,626 L 450,746 L 549,745 L 406,568 L 502,462 L 501,435 L 380,567 L 505,726 L 459,726 L 353,595 L 307,644 L 306,726 L 263,725 L 264,450 L 307,425 L 307,583 Z M 540,307 L 542,311 L 337,523 L 329,531 L 326,530 L 326,410 L 510,290 L 515,291 Z"
        fill="#FFFFFF"
        fillRule="evenodd"
      />
      {/* Letter M in champagne gold forming the right gable roof & wall */}
      <path
        d="M 519,467 L 501,487 L 501,660 L 519,682 L 521,682 L 521,468 Z M 601,324 L 503,431 L 502,459 L 605,350 L 709,417 L 641,535 L 564,421 L 549,434 L 641,574 L 726,433 L 759,450 L 759,726 L 723,725 L 722,508 L 641,635 L 558,516 L 558,728 L 577,745 L 578,584 L 640,673 L 700,580 L 705,745 L 778,745 L 780,441 Z"
        fill="#D5BA8C"
        fillRule="evenodd"
      />
    </svg>
  );
}
