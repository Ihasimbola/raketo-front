import * as React from "react";
const ErrorIcon = (props: any) => (
  <svg
    height={props.height || 24}
    viewBox="0 0 24 24"
    width={props.width || 24}
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <g fill="#141414" fillRule="nonzero">
      <path d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0 2c-6.627417 0-12-5.372583-12-12s5.372583-12 12-12 12 5.372583 12 12-5.372583 12-12 12z" />
      <path d="m9.20710678 16.2071068c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l6.99999998-6.99999998c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356z" />
      <path d="m7.79289322 9.20710678c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0l7.00000002 6.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0z" />
    </g>
  </svg>
);
export default ErrorIcon;