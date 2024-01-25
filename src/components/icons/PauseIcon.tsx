import React from 'react'
import { cn } from '../../lib/utils';

type Props = {
  height?: number | string,
  width?: number | string,
  currentColor?: string,
  className?: string
}

function PauseIcon(props: Props) {
  const { height = 14, width = 14, currentColor = "#212121", className } = props;
  return (
    <svg fill="none" className={cn([`fill-current ${currentColor}`, className])} height={height} viewBox="0 0 12 12" width={width} xmlns="http://www.w3.org/2000/svg"><g fill={currentColor}><path d="m3 2c-.55229 0-1 .44772-1 1v6c0 .55228.44771 1 1 1h1c.55229 0 1-.44772 1-1v-6c0-.55228-.44771-1-1-1z" /><path d="m8 2c-.55229 0-1 .44772-1 1v6c0 .55228.44771 1 1 1h1c.55229 0 1-.44772 1-1v-6c0-.55228-.44771-1-1-1z" /></g></svg>
  )
}

export default PauseIcon