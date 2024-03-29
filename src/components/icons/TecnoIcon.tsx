import React from 'react'

type Props = {
  height?: string | number,
  width?: string | number,
  currentColor?: string
}

function TecnoIcon({ width = 24, height = 24, currentColor = "stroke-white" }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon" icon-tabler icon-tabler-cpu stroke-white ${currentColor}`} width={width} height={height} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path d="M10 21v-2"></path></svg>
  )
}

export default TecnoIcon