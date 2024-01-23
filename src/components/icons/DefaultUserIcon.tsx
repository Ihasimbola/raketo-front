import React from 'react'
import { cn } from '../../lib/utils'

type Props = {
  height?: string | number,
  width?: string | number,
  currentColor?: string,
  className?: string
}

function DefaultUserIcon({ currentColor, width = 24, height = 24, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      stroke="currentColor"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
      fill="currentColor"
      className={cn([className, `${currentColor}`])}
    >
      <path d="M30.933 32.528c-.146-1.612-.09-2.737-.09-4.21.73-.383 2.038-2.825 2.259-4.888.574-.047 1.479-.607 1.744-2.818.143-1.187-.425-1.855-.771-2.065.934-2.809 2.874-11.499-3.588-12.397-.665-1.168-2.368-1.759-4.581-1.759-8.854.163-9.922 6.686-7.981 14.156-.345.21-.913.878-.771 2.065.266 2.211 1.17 2.771 1.744 2.818.22 2.062 1.58 4.505 2.312 4.888 0 1.473.055 2.598-.091 4.21C19.367 37.238 7.546 35.916 7 45h38c-.545-9.084-12.315-7.762-14.067-12.472z"></path>
    </svg>
  )
}

export default DefaultUserIcon