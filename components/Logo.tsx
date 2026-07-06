type LogoProps = {
  className?: string;
  iconOnly?: boolean;
};

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 40"
      className={`h-9 w-auto ${className}`}
      role="img"
      aria-label="ContaExpert MD"
    >
      <g transform="translate(0, 2)">
        <rect x="2" y="8" width="28" height="22" rx="4" fill="#2563EB" opacity="0.15" />
        <path
          d="M8 28V14h4v6h8v-6h4v14h-4v-6h-8v6H8z"
          fill="#2563EB"
        />
        <path
          d="M18 10l6 4-6 4V10z"
          fill="#0F2B46"
        />
        <line x1="6" y1="30" x2="34" y2="30" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" />
      </g>
      {!iconOnly && (
        <>
          <text x="44" y="26" fill="#0F2B46" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">
            ContaExpert
          </text>
          <text x="148" y="26" fill="#2563EB" fontSize="14" fontWeight="600" fontFamily="system-ui, sans-serif">
            MD
          </text>
        </>
      )}
    </svg>
  );
}
