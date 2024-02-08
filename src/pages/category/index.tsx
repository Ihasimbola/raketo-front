import Text from '../../components/Text/Text'
import Card from '../../components/Card/Card'
import CategoryService from '../../services/categoryService'
import { Outlet, useActionData, useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Snackbar from '../../components/snackbar'
import { ActionResType } from "../../types/pages/type";

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

export async function loader({ request }: any) {
  try {
    const categories = await CategoryService.getCategories();
    console.log(categories)
    return categories;
  } catch (error: any) {
    console.error('Error getting categories ', error.message);
  }
}

export async function action({ request }: any) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as any;
    const res = await CategoryService.createCategory('/category', data);
    if (res?.response?.status === 409) {
      return {
        messageExist: true,
        message: res.response.data.message,
        status: "warning",
      } as ActionResType;
    }

    return {
      messageExist: true,
      message: res?.data?.message,
      status: "success",
      categories: res.data
    } as ActionResType;

  } catch (err: any) {
    console.error(err.message);
    return null;
  }
}

function CategoryPage({ }: Props) {
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
        Ireo sokajy rehetra
      </Text>
      <div className="flex flex-row flex-wrap overflow-hidden gap-4">
        {
          allCategories.map((category: any, idx: number) => (
            <Card data={category} key={idx}>
              <Text>
                {category.label}
              </Text>
            </Card>
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

export default CategoryPage