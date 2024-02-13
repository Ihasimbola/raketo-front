import * as React from "react";
interface Props {
  height?: number | string;
  width?: number;
  currentColor?: string;
  className?: string;
}

const TrashIcon = ({ height = 24, width = 24, currentColor = "#535358", className }: Props) => {
  const [pathColor, setColorPath] = React.useState(currentColor);

  return (
    <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"
      stroke={pathColor}
      fill="none"
      height={width}
      width={width}
      className={`${pathColor}`}
      onMouseOver={() => setColorPath("red")}
      onMouseLeave={() => setColorPath('#535358')}
    >
      <g>
        <path d="m31 16v-4h10v4" />
        <path d="m51 25v31c0 2.2091-1.7909 4-4 4h-22c-2.2091 0-4-1.7909-4-4v-31" />
        <path d="m17 16h38v4h-38z" />
        <path d="m41 28.25v26.75" />
        <path d="m31 28.25v26.75" />
      </g>
    </svg>
  )
}
export default TrashIcon;