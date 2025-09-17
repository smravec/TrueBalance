interface BrainTLogoProps {
  className?: string;
}

export const BrainTLogo = ({ className }: BrainTLogoProps) => {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main brain outline - more anatomically correct */}
      <path
        d="M20 6c-3.2 0-6 1.8-7.4 4.4C11.4 11.2 10 12.8 10 14.8c0 1.2.4 2.3 1.1 3.2C9.8 19.2 9 20.8 9 22.6c0 2.4 1.4 4.4 3.4 5.4C12.8 29.4 13 30.7 13 32c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4 0-1.3.2-2.6.6-3.8 2-1 3.4-3 3.4-5.4 0-1.8-.8-3.4-2.1-4.6.7-.9 1.1-2 1.1-3.2 0-2-1.4-3.6-2.6-4.4C26 7.8 23.2 6 20 6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Left hemisphere details */}
      <path
        d="M12 16c2 1.5 4 2.5 6 3M11 20c2.5 1 5 1.5 7.5 1.5M13 25c2 .8 4 1.2 6 1.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Right hemisphere details */}
      <path
        d="M28 16c-2 1.5-4 2.5-6 3M29 20c-2.5 1-5 1.5-7.5 1.5M27 25c-2 .8-4 1.2-6 1.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Central fissure */}
      <path
        d="M20 10c0 3 0 6 0 9c0 4 0 8 0 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      
      {/* Brain folds (sulci) */}
      <path
        d="M15 12c1.5 2 3 4 4.5 6M25 12c-1.5 2-3 4-4.5 6M14 23c2-1 4-1.5 6-1.5M26 23c-2-1-4-1.5-6-1.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      
      {/* Letter T in the center - integrated into brain design */}
      <g fill="currentColor" opacity="0.8">
        {/* T horizontal bar */}
        <rect x="15" y="17.5" width="10" height="2" rx="1" />
        {/* T vertical bar */}
        <rect x="19" y="17.5" width="2" height="8" rx="1" />
      </g>
    </svg>
  );
};