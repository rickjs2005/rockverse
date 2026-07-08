const paths: Record<string, React.ReactNode> = {
  guitar: (
    <>
      <path d="M20.5 3.5h7" strokeLinecap="round" />
      <path d="M24 3.5V17" />
      <path d="M24 17c-3.2 0-3.8 2.4-7.2 2.4-5 0-8.3 3.6-8.3 8.3 0 3.4 1.8 5.3 3.8 7.3 2.4 2.4 3.4 5.6 6.9 7.3 1.5.7 3 1.2 4.8 1.2s3.3-.5 4.8-1.2c3.5-1.7 4.5-4.9 6.9-7.3 2-2 3.8-3.9 3.8-7.3 0-4.7-3.3-8.3-8.3-8.3-3.4 0-4-2.4-7.2-2.4z" />
      <path d="M18 28.5h12M18 33h12" strokeLinecap="round" />
      <circle cx="24" cy="38.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  bass: (
    <>
      <path d="M21.5 3h5" strokeLinecap="round" />
      <path d="M24 3v20" />
      <path d="M24 23c-6.5 0-11 4-11 9.7C13 38.6 17.8 44 24 44s11-5.4 11-11.3C35 27 30.5 23 24 23z" />
      <path d="M20 28.5v9M24 30v9M28 28.5v9" strokeLinecap="round" />
    </>
  ),
  drums: (
    <>
      <circle cx="24" cy="31" r="10.5" />
      <circle cx="24" cy="31" r="3.5" />
      <path d="M9 12l12 12M39 12L27 24" strokeLinecap="round" />
      <path d="M6.5 12.5h8M33.5 12.5h8" strokeLinecap="round" />
      <path d="M16 40l-3.5 4.5M32 40l3.5 4.5" strokeLinecap="round" />
    </>
  ),
  keys: (
    <>
      <rect x="4.5" y="15" width="39" height="18" rx="2" />
      <path d="M12.3 15v18M20.1 15v18M27.9 15v18M35.7 15v18" />
      <path
        d="M10.3 15h4v10h-4zM18.1 15h4v10h-4zM25.9 15h4v10h-4zM33.7 15h4v10h-4z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  mic: (
    <>
      <path d="M16.5 9c0-3.3 3.3-5.5 7.5-5.5S31.5 5.7 31.5 9v6.5c0 4.8-3.3 8-7.5 8s-7.5-3.2-7.5-8z" />
      <path d="M16.5 10.5h15M16.5 14.5h15M17.5 18.5h13" />
      <path d="M24 23.5V36" strokeLinecap="round" />
      <path d="M16 44c0-4 3.5-7 8-7s8 3 8 7" strokeLinecap="round" />
    </>
  ),
};

export default function InstrumentIcon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
