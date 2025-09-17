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
      {/* Robot head - rounded pill shape like the reference */}
      <rect
        x="6"
        y="8"
        width="28"
        height="16"
        rx="8"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      
      {/* Dark screen area */}
      <rect
        x="8"
        y="10"
        width="24"
        height="12"
        rx="6"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Glowing blue eyes with sleepy/cute droop */}
      <ellipse cx="16" cy="16" rx="3" ry="2.5" fill="#00D4FF" opacity="0.9" />
      <ellipse cx="24" cy="16" rx="3" ry="2.5" fill="#00D4FF" opacity="0.9" />
      
      {/* Eye highlights for extra cuteness */}
      <ellipse cx="17" cy="15" rx="1" ry="0.8" fill="#87CEEB" opacity="0.6" />
      <ellipse cx="25" cy="15" rx="1" ry="0.8" fill="#87CEEB" opacity="0.6" />
      
      {/* Cute robot body */}
      <rect
        x="10"
        y="22"
        width="20"
        height="14"
        rx="10"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      
      {/* Side "ears" like the reference */}
      <ellipse cx="8" cy="16" rx="2.5" ry="4" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <ellipse cx="32" cy="16" rx="2.5" ry="4" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      
      {/* T letter integrated into the body as a subtle emblem */}
      <g fill="currentColor" opacity="0.6">
        {/* T horizontal bar */}
        <rect x="17" y="27" width="6" height="1.5" rx="0.75" />
        {/* T vertical bar */}
        <rect x="19.25" y="27" width="1.5" height="5" rx="0.75" />
      </g>
      
      {/* Subtle body details */}
      <circle cx="15" cy="30" r="1" fill="currentColor" opacity="0.2" />
      <circle cx="25" cy="30" r="1" fill="currentColor" opacity="0.2" />
    </svg>
  );
};