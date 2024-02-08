import * as React from "react";
import { cn } from "../../lib/utils";

interface Props {
  height?: number | string;
  width?: number;
  currentColor?: string;
  className?: string;
}
const DoubleCheckIcon = ({ height = 24, width = 24, className, currentColor = "#535358" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke={currentColor}
    fill="none"
    height={width}
    viewBox="0 0 32 32"
    width={width}
    className={`${currentColor}`}
  >
    <path
      d="m4 17 5 5 12-12m-5 10 2 2 12-12"
      stroke={currentColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default DoubleCheckIcon;