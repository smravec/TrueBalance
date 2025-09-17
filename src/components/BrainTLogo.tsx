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
      {/* Bigger robot head */}
      <rect
        x="4"
        y="4"
        width="32"
        height="18"
        rx="9"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      
      {/* Dark screen area on head - now black */}
      <rect
        x="6"
        y="6"
        width="28"
        height="14"
        rx="7"
        fill="black"
        opacity="0.9"
      />
      
      {/* White eyes for contrast */}
      <ellipse cx="15" cy="13" rx="3.5" ry="3" fill="white" opacity="0.9" />
      <ellipse cx="25" cy="13" rx="3.5" ry="3" fill="white" opacity="0.9" />
      
      {/* Eye highlights - darker for white eyes */}
      <ellipse cx="16" cy="12" rx="1.2" ry="1" fill="#E0E0E0" opacity="0.6" />
      <ellipse cx="26" cy="12" rx="1.2" ry="1" fill="#E0E0E0" opacity="0.6" />
      
      {/* Side "ears" on the head */}
      <ellipse cx="2" cy="13" rx="2.5" ry="4" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <ellipse cx="38" cy="13" rx="2.5" ry="4" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      
      {/* Separate robot torso/body */}
      <rect
        x="10"
        y="25"
        width="20"
        height="12"
        rx="6"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      
      {/* T letter prominently displayed on the torso */}
      <g fill="currentColor" opacity="0.8">
        {/* T horizontal bar */}
        <rect x="15" y="28" width="10" height="2.5" rx="1.25" />
        {/* T vertical bar */}
        <rect x="18.75" y="28" width="2.5" height="7" rx="1.25" />
      </g>
      
      {/* Torso details */}
      <circle cx="13" cy="32" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="27" cy="32" r="1" fill="currentColor" opacity="0.3" />
      
      {/* Connection between head and torso (like a neck) */}
      <rect x="18" y="22" width="4" height="3" rx="2" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  );
};