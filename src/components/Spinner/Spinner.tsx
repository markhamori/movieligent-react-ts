// Styles
import "./Spinner.css";

export const Spinner = () => {
  return (
    <svg
      width="94"
      height="94"
      viewBox="0 0 94 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Spinner">
        <path
          id="letter"
          d="M62.994 32.516V62H55.812V44.318L49.218 62H43.422L36.786 44.276V62H29.604V32.516H38.088L46.362 52.928L54.552 32.516H62.994Z"
          fill="white"
        />
        <circle
          id="Ellipse 8"
          cx="47"
          cy="47"
          r="44.5"
          stroke="url(#paint0_linear_3_1009)"
          strokeWidth="5"
        />
        <path
          id="halfCircle"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.0826 75.0644C31.918 79.4208 39.1578 82 47 82C66.33 82 82 66.33 82 47C82 37.169 77.9467 28.2846 71.4201 21.9269L68.1666 25.7403C73.6229 31.1728 77 38.692 77 47C77 63.5685 63.5685 77 47 77C40.3965 77 34.2913 74.8665 29.3362 71.2511L26.0826 75.0644Z"
          fill="url(#paint1_linear_3_1009)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3_1009"
          x1="80.7436"
          y1="8.4359"
          x2="18.0769"
          y2="86.1667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EF473A" />
          <stop offset="1" stopColor="#CB2D3E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3_1009"
          x1="74.1142"
          y1="27.3181"
          x2="33.5524"
          y2="74.1499"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EF473A" />
          <stop offset="1" stopColor="#CB2D3E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
