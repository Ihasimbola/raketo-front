import React, { createRef, useEffect, useRef, useState } from 'react'
import Text from '../Text/Text'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import { Button } from '../Button/Button'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import "./styles.scss";
import { TopicsType } from '../../types/pages/type'
import { NavLink, useFetcher } from 'react-router-dom'
import DoubleCheckIcon from '../icons/DoubleCheckIcon'
import { TopicService } from '../../services/topicService'
import TrashIcon from '../icons/TrashIcon'

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
  data: TopicsType
}

function ItemList({ variant, data }: Props) {
  const fetcher = useFetcher()
  const spentTime = data.spent_time;
  const [chronoInterval, setChronoInterval] = useState() as any
  const [chronoBtnActive, setChronoBtnActive] = useState("pause");
  const [isDone, setIsDone] = useState(data.isDone)
  const rowRef = createRef<HTMLDivElement>();
  const [chrono, setChrono] = useState({
    day: spentTime.day,
    hour: spentTime.hour,
    minute: spentTime.minute,
    second: spentTime.second
  });


  useEffect(() => {
    setIsDone(data.isDone);
  }, [data.isDone]);


  const startInterval = () => {
    setChronoBtnActive("play");

    setChronoInterval(setInterval(() => {
      setChrono((prevState) => {
        if (prevState.second === 59) {
          return {
            ...prevState,
            minute: prevState.minute + 1,
            second: 0
          }
        }
        if (prevState.minute === 59) {
          return {
            ...prevState,
            hour: prevState.hour + 1,
            minute: 0
          }
        }
        if (prevState.hour === 24) {
          return {
            ...prevState,
            day: prevState.day + 1,
            hour: 0
          }
        } else {
          return {
            ...prevState,
            second: prevState.second + 1
          }
        }

      })

    }, 1000))
  }

  const stopInterval = () => {
    setChronoBtnActive('pause')
    setChronoInterval((prevState: any) => clearInterval(prevState))
    // console.log(rowRef.current?.id)
  }

  const handleUpdateChrono = async () => {
    stopInterval();
    try {
      const res = await TopicService.updateTopic(data._id, chrono);
      console.log("res from updateChrono ", res);
    } catch (error: any) {
      console.error("Error updating chrono ", error.message);
    }
  }

  return (
    <div className={cn([listVariants({ variant }), "grid list"])} id={data._id} ref={rowRef}>
      <Text className="list__title">
        {data.title}
      </Text>
      <Text className="list__desc">
        {data.description}
      </Text>
      <div
        className='flex flex-row items-center gap-4 list__icons'
      >
        <div onClick={startInterval} className={cn("btn", (chronoBtnActive === "play" ? "btn-desactive" : ""))}>
          <PlayIcon
            height={25}
            width={25}
            currentColor='text-green-800'
            className="cursor-pointer"
          />
        </div>

        <div onClick={handleUpdateChrono} className={cn("btn", (chronoBtnActive === "pause" ? "btn-desactive" : ""))}>
          <PauseIcon
            height="25"
            width={25}
            currentColor='text-yellow-700'
            className="cursor-pointer"
          />
        </div>

        <Text>
          {
            chrono.day ? (
              <Text as="span">{chrono.day + "andro:"}</Text>
            ) : (
              ""
            )
          }
          <Text as="span">
            {chrono.hour < 10 ? "0" + chrono.hour.toString() : chrono.hour}<span className="mx-[3px]">:</span>
          </Text>
          <Text as="span">
            {chrono.minute < 10 ? "0" + chrono.minute : chrono.minute}<span className="mx-[3px]">:</span>
          </Text>
          <Text as="span">
            {chrono.second < 10 ? "0" + chrono.second : chrono.second}
          </Text>

        </Text>
      </div>


      <div className="list__btn flex justify-between items-center">
        {
          isDone ? (
            <div className="flex justify-end " >
              <DoubleCheckIcon height="auto" width={40} currentColor="stroke-green-700" />
            </div>
          ) : (
            <fetcher.Form method='PATCH' action={`${data._id}`} className="">
              <Button
                type="submit"
                name="isDone"
                value="true"
              >
                Vita
              </Button>
            </fetcher.Form>
          )
        }
        <NavLink to={`delete/${data._id}`}>
          <TrashIcon currentColor='stroke-gray-800' />
        </NavLink>
      </div>

    </div >
  )
}

export default ItemList