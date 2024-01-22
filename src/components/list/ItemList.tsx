import React from 'react'
import Text from '../Text/Text'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import { Button } from '../Button/Button'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import "./styles.scss";

const listVariants = cva(
  "flex flex-row justify-between items-center w-full rounded-md border border-1 border-gray-300 py-2 px-5",
  {
    variants: {
      variant: {
        primary: "bg-gray-100",
        secondary: "bg-gray-200",
        dark: "bg-gray-400"
      }
    },
    defaultVariants: {
      variant: "secondary",
    }
  }
)

interface Props extends VariantProps<typeof listVariants> {
  data: {
    title: string,
    description: string,
    duration: string,
    isFinished: boolean
  }
}

function ItemList({ variant, data }: Props) {
  return (
    <div className={cn([listVariants({ variant }), "list"])}>
      <Text className="list__title">
        {data.title}
      </Text>
      <Text className="list__desc">
        {data.description}
      </Text>
      <div
        className='flex flex-row items-center gap-4 list__icons'
      >
        <PlayIcon
          height={25}
          width={25}
          currentColor='text-green-800'
          className="cursor-pointer"
        />
        <PauseIcon
          height="25"
          width={25}
          currentColor='text-yellow-700'
          className="cursor-pointer"
        />

        <Text>
          {data.duration}
        </Text>
      </div>



      <div className="list__btn">
        <Button

        >
          Vita
        </Button>
      </div>
    </div>
  )
}

export default ItemList