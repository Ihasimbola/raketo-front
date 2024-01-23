import React from 'react'
import Text from '../../components/Text/Text'
import Card from '../../components/Card/Card'
import { nanoid } from 'nanoid'
import JS from "../../assets/JS.png"
import Go from "../../assets/Go.png"
import rust from "../../assets/rust-logo-512x512-blk.png"
type Props = {}

const allItems = [
  {
    label: "React",
    itemsNumber: 5,
    accumulatedHour: 9,
    logo: JS
  },
  {
    label: "Vue",
    itemsNumber: 8,
    accumulatedHour: 4,
    logo: JS

  },
  {
    label: "Angular",
    itemsNumber: 3,
    accumulatedHour: 1,
    logo: JS

  },
  {
    label: "Rust",
    itemsNumber: 5,
    accumulatedHour: 2,
    logo: rust

  },
  {
    label: "Go",
    itemsNumber: 2,
    accumulatedHour: 8,
    logo: Go

  }
]

function TeknoPage({ }: Props) {
  return (
    <div className='flex flex-col gap-3 mt-[15px]'>
      <Text
        color="light-700"
        as="h1"
        size="xl"
        weight="medium"
      >
        Ireo teknolojia rehetra
      </Text>
      <div className="flex flex-row flex-wrap overflow-hidden gap-4">
        {
          allItems.map((category: any, idx: number) => (
            <Card data={category} key={nanoid()}>
              <Text>
                {category.label}
              </Text>
              <img src={category.logo} alt={category.label} width={24} height={24} />
            </Card>
          ))
        }

      </div>
    </div>
  )
}

export default TeknoPage