export default function Theme({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <circle
        cx="256"
        cy="256"
        r="208"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z" />
    </svg>
  );
}
