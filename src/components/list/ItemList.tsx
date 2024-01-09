import React from 'react'
import Text from '../Text/Text'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import { Button } from '../Button/Button'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

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

}

function ItemList({ variant }: Props) {
  return (
    <div
      className={cn(listVariants({ variant }))}>
      <Text>
        Learn asynchronous programming
      </Text>
      <div
        className='flex flex-row items-center gap-4'
      >
        <PlayIcon
          height={25}
          width={25}
          currentColor='text-green-800'
        />
        <PauseIcon
          height="25"
          width={25}
          currentColor='text-yellow-700'
        />

        <Text>
          00:40:06
        </Text>
      </div>



      <div>
        <Button

        >
          Vita
        </Button>
      </div>
    </div>
  )
}

export default ItemList