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
      {/* Robot body - larger and connected to head */}
      <rect
        x="8"
        y="8"
        width="24"
        height="28"
        rx="12"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      
      {/* Dark screen area for head */}
      <rect
        x="10"
        y="10"
        width="20"
        height="10"
        rx="5"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Glowing blue eyes with sleepy/cute droop */}
      <ellipse cx="17" cy="15" rx="2.5" ry="2" fill="#00D4FF" opacity="0.9" />
      <ellipse cx="23" cy="15" rx="2.5" ry="2" fill="#00D4FF" opacity="0.9" />
      
      {/* Eye highlights for extra cuteness */}
      <ellipse cx="17.8" cy="14.2" rx="0.8" ry="0.6" fill="#87CEEB" opacity="0.6" />
      <ellipse cx="23.8" cy="14.2" rx="0.8" ry="0.6" fill="#87CEEB" opacity="0.6" />
      
      {/* Side "ears" attached to the unified body */}
      <ellipse cx="6" cy="15" rx="2" ry="3" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <ellipse cx="34" cy="15" rx="2" ry="3" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      
      {/* T letter integrated prominently in the chest area */}
      <g fill="currentColor" opacity="0.7">
        {/* T horizontal bar */}
        <rect x="16" y="24" width="8" height="2" rx="1" />
        {/* T vertical bar */}
        <rect x="19" y="24" width="2" height="8" rx="1" />
      </g>
      
      {/* Subtle body panel lines */}
      <rect x="12" y="22" width="16" height="1" rx="0.5" fill="currentColor" opacity="0.1" />
      <rect x="12" y="33" width="16" height="1" rx="0.5" fill="currentColor" opacity="0.1" />
      
      {/* Small decorative elements on the body */}
      <circle cx="14" cy="28" r="1" fill="currentColor" opacity="0.2" />
      <circle cx="26" cy="28" r="1" fill="currentColor" opacity="0.2" />
      
      {/* Body accent lines */}
      <path d="M12 26 L28 26" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M12 30 L28 30" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
};