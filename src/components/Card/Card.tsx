import React, { Children, useLayoutEffect } from 'react'
import Text from '../Text/Text'
import { cn } from '../../lib/utils'
import './style.scss'
import Badge from '../Badge/Badge'

type DataType = {
  itemsNumber: number,
  accumulatedHour: number
}

type Props = {
  children: React.ReactNode,
  data: DataType
}

function Card({ data, children }: Props) {
  const etiquette: any = Children
    .map(children, (child: any, idx: number) => child)
    ?.filter((item: any, idx: number) => idx > 0)[0]

  const childrenArr = Children.toArray(children);


  return (
    <div
      className={cn("rounded-md w-fit card-container cursor-pointer")}
    >
      <div className={cn(`${etiquette ? 'justify-between flex flex-row w-full' : 'self-end'}`)}>
        <div className="">
          {etiquette}
        </div>
        <Badge>
          <Text color="light-800">
            {`Zavatra ${data.itemsNumber}`}
          </Text>
        </Badge>
      </div>
      <div>
        {childrenArr[0]}
      </div>
      <div className="self-end">
        <Badge>
          <Text color="light-800">{data.accumulatedHour} ora</Text>
        </Badge>
      </div>
    </div>
  )
}

export default Card