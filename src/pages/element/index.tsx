import React from 'react'
import Text from '../../components/Text/Text'
import Card from '../../components/Card/Card'
import { nanoid } from 'nanoid'
import ItemList from '../../components/list/ItemList';
import "./styles.scss";

const itemsLists = [
  {
    title: "Promise",
    description: "Learn asynchronous programming concept",
    duration: "00:40:18",
    isFinished: false
  },
  {
    title: "Ajax",
    description: "Learn to fetch data from server",
    duration: "01:20:18",
    isFinished: false
  },
  {
    title: "Rest API",
    description: "Implement rest API in NodeJS",
    duration: "00:40:18",
    isFinished: false
  },
  {
    title: "Socket",
    description: "How to implement chat in react app",
    duration: "00:20:18",
    isFinished: false
  },
  {
    title: "Scraping",
    description: "Learn to scrap a web page",
    duration: "00:15:18",
    isFinished: false
  },
  {
    title: "Crypto",
    description: "How to mining data",
    duration: "00:25:18",
    isFinished: false
  },
];

type ItemType = {
  title: string,
  description: string,
  duration: string,
  isFinished: boolean
}


// type Props = {}

function ElementPage({ }) {
  return (
    <div className="mt-4">
      <Text
        color="light-700"
        as="h1"
        size="xl"
        weight="medium"
      >
        Ireo singa rehetra
      </Text>
      <div className="list__container flex flex-col gap-4 mt-3">
        {
          itemsLists.map((item: ItemType, idx: number) => (
            <ItemList data={item} key={nanoid()} />
          ))
        }
      </div>
    </div>
  )
}

export default ElementPage