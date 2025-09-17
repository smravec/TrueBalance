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
      {/* Robot head outline */}
      <rect
        x="8"
        y="12"
        width="24"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Top antenna/sensors */}
      <rect x="18" y="8" width="4" height="4" rx="1" fill="currentColor" opacity="0.7" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="25" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
      
      {/* Robot eyes */}
      <rect x="13" y="17" width="4" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="23" y="17" width="4" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Eye lights */}
      <circle cx="15" cy="18.5" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="25" cy="18.5" r="1" fill="currentColor" opacity="0.8" />
      
      {/* Letter T integrated as mouth/display screen */}
      <rect x="14" y="24" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      
      {/* T letter inside the screen */}
      <g fill="currentColor" opacity="0.9">
        {/* T horizontal bar */}
        <rect x="16" y="25.5" width="8" height="1.5" rx="0.75" />
        {/* T vertical bar */}
        <rect x="19.25" y="25.5" width="1.5" height="6" rx="0.75" />
      </g>
      
      {/* Circuit pattern details */}
      <path
        d="M10 14h2M10 16h2M28 14h2M28 16h2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      
      {/* Side panels */}
      <rect x="9" y="18" width="1" height="8" fill="currentColor" opacity="0.3" />
      <rect x="30" y="18" width="1" height="8" fill="currentColor" opacity="0.3" />
      
      {/* Digital elements */}
      <rect x="11" y="22" width="2" height="1" fill="currentColor" opacity="0.5" />
      <rect x="27" y="22" width="2" height="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
};