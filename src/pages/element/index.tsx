import React, { useEffect, useState } from 'react'
import Text from '../../components/Text/Text'
import Card from '../../components/Card/Card'
import ItemList from '../../components/list/ItemList';
import "./styles.scss";
import { Outlet } from 'react-router';
import { TopicService } from '../../services/topicService';
import { useLoaderData, useActionData } from 'react-router-dom';
import { ActionResType } from '../../types/pages/type';
import Snackbar from '../../components/snackbar';
import { TopicsType } from "../../types/pages/type";

const itemsLists = [
  {
    title: "Promise",
    description: "Learn asynchronous programming concept",
    duration: "00:00:40:18",
    isFinished: false,
    _id: "12385465465468"
  },
  {
    title: "Ajax",
    description: "Learn to fetch data from server",
    duration: "00:01:20:18",
    isFinished: false,
    _id: "12385465465468"

  },
  {
    title: "Rest API",
    description: "Implement rest API in NodeJS",
    duration: "00:00:40:18",
    isFinished: false,
    _id: "12385465465468"

  },
  {
    title: "Socket",
    description: "How to implement chat in react app",
    duration: "00:00:20:18",
    isFinished: false,
    _id: "12385465465468"

  },
  {
    title: "Scraping",
    description: "Learn to scrap a web page",
    duration: "00:00:15:18",
    isFinished: false,
    _id: "12385465465468"

  },
  {
    title: "Crypto",
    description: "How to mining data",
    duration: "00:00:25:18",
    isFinished: false,
    _id: "12385465465468"

  },

];

type ItemType = {
  title: string,
  description: string,
  duration: string,
  isFinished: boolean,
  _id: string
}

export async function loader({ request }: any) {
  try {
    const topics = await TopicService.getTopics();
    console.log(topics)
    return topics;
  } catch (error: any) {
    console.error('Error getting tecnos ', error.message);
  }
}

export async function action({ request, param }: any) {
  try {
    if (request.method === "PATCH") {
      console.log(await request.formData().get('chrono'))
      console.log("method patch");
      return null;
    }
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as any;
    data.spent_time = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    }
    const res: any = await TopicService.createTopic(data);
    console.log(res)
    if (res?.response?.status === 409) {
      return {
        messageExist: true,
        message: res.response.data.message,
        status: "warning",
      } as any
    }

    return {
      messageExist: true,
      message: res?.data?.message,
      status: "success",
      categories: res.data
    } as any

  } catch (err: any) {
    console.error(err.message);
    return null;
  }
}

// type Props = {}

function ElementPage({ }) {
  const topics = useLoaderData() as TopicsType[];
  const actionData = useActionData() as ActionResType;
  const message = actionData?.message;
  const status = actionData?.status;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(actionData?.messageExist || false);
  }, [actionData])

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
          topics.map((item: TopicsType, idx: number) => (
            <ItemList data={item} key={idx} />
          ))
        }
      </div>
      <div>
        <Outlet />
      </div>
      {
        showMessage &&
        (
          <Snackbar
            show={showMessage}
            setShower={setShowMessage}
            content={message}
            variant={status}
            textColor='text-black'
          />
        )
      }
    </div>
  )
}

export default ElementPage