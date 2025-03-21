export default function Middle({ className, loading }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <g fill="currentColor" fillRule="nonzero">
          <g>
            <path
              d="M15 3l-4 4H7v4l-4 4V3h12z"
              opacity={loading ? "1" : ".2"}
              transform="translate(-2164.000000, -795.000000) translate(2164.000000, 795.000000)"
            />
            <path
              d="M21 9l-4 4h-4v4l-4 4V9h12z"
              opacity={loading ? "1" : ".2"}
              transform="translate(-2164.000000, -795.000000) translate(2164.000000, 795.000000) translate(15.000000, 15.000000) rotate(-180.000000) translate(-15.000000, -15.000000)"
            />
            <path
              d="M18 3L21 3 21 6 6 21 3 21 3 18z"
              transform="translate(-2164.000000, -795.000000) translate(2164.000000, 795.000000)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
