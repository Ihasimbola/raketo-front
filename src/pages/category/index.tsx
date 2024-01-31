import React from 'react'
import Text from '../../components/Text/Text'
import Card from '../../components/Card/Card'
import js from '../../assets/JS.png'
import CategoryService from '../../services/categoryService'
import { Outlet, useLoaderData } from 'react-router-dom'

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
    return categories.data;
  } catch (error: any) {
    console.error('Error getting categories ', error.message);
  }
}

export async function action({ request }: any) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as { name: string };
    const res = await CategoryService.createCategory('/category', data);
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    console.error(err.message);
  }
}

function CategoryPage({ }: Props) {
  const categories = useLoaderData();

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
    </div>
  )
}

export default CategoryPage