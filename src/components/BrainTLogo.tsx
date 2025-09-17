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
      {/* Cute robot head - more rounded */}
      <rect
        x="7"
        y="11"
        width="26"
        height="22"
        rx="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Adorable antenna with little hearts */}
      <circle cx="20" cy="7" r="2" fill="currentColor" opacity="0.6" />
      <path d="M18 5 L20 3 L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      
      {/* Side antennas */}
      <circle cx="13" cy="9" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="27" cy="9" r="1.5" fill="currentColor" opacity="0.4" />
      
      {/* Happy eyes with eyebrows */}
      <path d="M12 16 Q15 14 18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M22 16 Q25 14 28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      
      {/* Sparkly eyes */}
      <circle cx="15" cy="18" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="25" cy="18" r="2.5" fill="currentColor" opacity="0.8" />
      
      {/* Eye sparkles */}
      <circle cx="15.8" cy="17.2" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="25.8" cy="17.2" r="0.8" fill="currentColor" opacity="0.3" />
      
      {/* Cute blush cheeks */}
      <ellipse cx="10" cy="20" rx="2" ry="1.5" fill="currentColor" opacity="0.2" />
      <ellipse cx="30" cy="20" rx="2" ry="1.5" fill="currentColor" opacity="0.2" />
      
      {/* Happy smile with T integrated */}
      <path d="M14 24 Q20 28 26 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      
      {/* T letter as part of the smile - like a cute badge */}
      <rect x="17.5" y="22" width="5" height="8" rx="2" fill="currentColor" opacity="0.1" />
      <g fill="currentColor" opacity="0.9">
        {/* T horizontal bar */}
        <rect x="16" y="24" width="8" height="1.5" rx="0.75" />
        {/* T vertical bar */}
        <rect x="19.25" y="24" width="1.5" height="5" rx="0.75" />
      </g>
      
      {/* Little decorative dots */}
      <circle cx="12" cy="28" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="28" cy="28" r="0.8" fill="currentColor" opacity="0.3" />
      
      {/* Cute little smile dimples */}
      <circle cx="16" cy="26" r="0.5" fill="currentColor" opacity="0.2" />
      <circle cx="24" cy="26" r="0.5" fill="currentColor" opacity="0.2" />
    </svg>
  );
};