import React from 'react'
import Text from '../Text/Text'
import { cn } from '../../lib/utils'
import './style.scss'
import Badge from '../Badge/Badge'

type Props = {
  children: React.ReactNode,
}

function Card({ children }: Props) {
  return (
    <div
      className={cn("rounded-md w-fit card-container cursor-pointer")}
    >
      <div className='self-end'>
        <Badge>
          <Text color="light-800">
            5 items
          </Text>
        </Badge>
      </div>
      <div>
        { children }
      </div>
      <div className="self-end">
        <Badge>
          <Text color="light-800">5 heures</Text>
        </Badge>
      </div>
    </div>
  )
}

export default Card