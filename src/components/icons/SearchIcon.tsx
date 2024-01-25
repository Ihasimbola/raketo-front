import React from 'react'
import { cn } from '../../lib/utils'

type Props = {
  height?: string | number,
  width?: string | number,
  currentColor?: string,
  className?: string
}

function SearchIcon({ currentColor, width = 24, height = 24, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={cn([className, `feather feather-search ${currentColor} ${className}`])}
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21L16.65 16.65"></path>
    </svg>
  )
}

export default SearchIcon