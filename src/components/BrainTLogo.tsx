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
      {/* Brain outline */}
      <path
        d="M20 4c-4.4 0-8 3.6-8 8 0 1.1.2 2.1.6 3C10.7 15.5 9 17.1 9 19c0 2.2 1.8 4 4 4h.5c.3.9.8 1.7 1.5 2.3V28c0 2.2 1.8 4 4 4s4-1.8 4-4v-2.7c.7-.6 1.2-1.4 1.5-2.3H25c2.2 0 4-1.8 4-4 0-1.9-1.3-3.5-3.1-3.9.4-.9.6-1.9.6-3 0-4.4-3.6-8-8-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Additional brain curves */}
      <path
        d="M14 16c1.5-1 3-1.5 4.5-1.5M22 14.5c1.5 0 3 .5 4.5 1.5M16 22c1 .5 2 .8 3 .8M21 22.8c1 0 2-.3 3-.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      
      {/* Letter T in the center */}
      <g fill="currentColor">
        {/* T horizontal bar */}
        <rect x="14" y="16" width="12" height="2.5" rx="1.25" />
        {/* T vertical bar */}
        <rect x="18.75" y="16" width="2.5" height="10" rx="1.25" />
      </g>
    </svg>
  );
};