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
      
      {/* Bright neon green eyes */}
      <ellipse cx="15" cy="13" rx="3.5" ry="3" fill="#00FF41" opacity="0.9" />
      <ellipse cx="25" cy="13" rx="3.5" ry="3" fill="#00FF41" opacity="0.9" />
      
      {/* Eye highlights - lighter green */}
      <ellipse cx="16" cy="12" rx="1.2" ry="1" fill="#66FF80" opacity="0.6" />
      <ellipse cx="26" cy="12" rx="1.2" ry="1" fill="#66FF80" opacity="0.6" />
      
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
      
      {/* Connection between head and torso (like a neck) */}
      <rect x="18" y="22" width="4" height="3" rx="2" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  );
};