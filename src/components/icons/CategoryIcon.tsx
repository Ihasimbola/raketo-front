import React from 'react'

type Props = {
  height?: string | number,
  width?: string | number,
  currentColor?: string
}

function CategoryIcon({ height = 24, width = 24, currentColor = "stroke-white" }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-category-2 ${currentColor}`} width={width} height={height} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>
  )
}

export default CategoryIcon