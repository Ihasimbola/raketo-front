import React from 'react'
import Text from '../../components/Text/Text'
import Card from '../../components/Card/Card'
import js from '../../assets/JS.png'
import { nanoid } from 'nanoid'

const allCategories = [
  {
    label: "Front",
    itemsNumber: 5,
    accumulatedHour: 9
  },
  {
    label: "Back",
    itemsNumber: 8,
    accumulatedHour: 4

  },
  {
    label: "Devops",
    itemsNumber: 3,
    accumulatedHour: 1

  },
  {
    label: "IA",
    itemsNumber: 5,
    accumulatedHour: 2

  },
  {
    label: "Crypto",
    itemsNumber: 2,
    accumulatedHour: 8

  }
]

type Props = {}

function CategoryPage({ }: Props) {
  return (
    <div className='flex flex-col gap-3 mt-[15px]'>
      <Text
        color="light-700"
        as="h1"
        size="xl"
        weight="medium"
      >
        Ireo sokajy rehetra
      </Text>
      <div className="flex flex-row flex-wrap overflow-hidden gap-4">
        {
          allCategories.map((category: any, idx: number) => (
            <Card data={category} key={nanoid()}>
              <Text>
                {category.label}
              </Text>
            </Card>
          ))
        }

      </div>
    </div>
  )
}

export default CategoryPage