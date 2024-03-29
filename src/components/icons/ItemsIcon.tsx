import React from 'react'

type Props = {
  height?: string | number,
  width?: string | number,
  currentColor?: string
}

function ItemsIcon({ width = 24, height = 24, currentColor = "stroke-white" }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon" icon-tabler icon-tabler-list-details ${currentColor}`} width={width} height={height} viewBox="0 0 24 24" strokeWidth={2} stroke="stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 5h8" /><path d="M13 9h5" /><path d="M13 15h8" /><path d="M13 19h5" /><path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>

  )
}

export default ItemsIcon