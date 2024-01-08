import React from 'react'
import { cn } from '../../lib/utils'
import './style.scss';

type Props = {
  children: React.ReactNode,
}

function Badge({ children }: Props) {
  return (
    <div
      className={cn(`py-1 px-2 rounded-md linear-bg`)}
    >
      { children }
    </div>
  )
}

export default Badge