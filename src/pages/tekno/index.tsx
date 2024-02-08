import React, { useEffect, useState } from 'react'
import Text from '../../components/Text/Text'
import Card from '../../components/Card/Card'
import JS from "../../assets/JS.png"
import Go from "../../assets/Go.png"
import rust from "../../assets/rust-logo-512x512-blk.png"
import { Outlet } from 'react-router'
import TecnoService from "../../services/tecnoService";
import { useLoaderData, useActionData } from 'react-router-dom'
import { ActionResType } from "../../types/pages/type";
import Snackbar from '../../components/snackbar'

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
];

export async function loader({ request }: any) {
  try {
    const tecnos = await TecnoService.getTecnos();
    // console.log(tecnos)
    return tecnos;
  } catch (error: any) {
    console.error('Error getting tecnos ', error.message);
  }
}

export async function action({ request }: any) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as any;
    const toPost = new FormData()
    toPost.append('name', data.name);
    toPost.append('icon', data.icon);
    const res: any = await TecnoService.createTecno('/tecno', formData);
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

function TeknoPage({ }: Props) {
  const categories = useLoaderData();
  const actionData = useActionData() as ActionResType;
  const message = actionData?.message;
  const status = actionData?.status;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(actionData?.messageExist || false);
  }, [actionData?.messageExist])

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
            <Card data={category} key={idx}>
              <Text>
                {category.label}
              </Text>
              <img src={category.logo} alt={category.label} width={24} height={24} />
            </Card>
          ))
        }

      </div>
      <Outlet />
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

export default TeknoPage