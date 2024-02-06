import React from 'react'
import Text from '../Text/Text'
import Input from '../Input/Input'
import Select from '../select'
import TecnoService from '../../services/tecnoService'
import { useLoaderData } from 'react-router-dom'

export async function loader() {
  try {
    const allTecnos = await TecnoService.getTecnos();
    return allTecnos.data;
  } catch (error: any) {
    console.error('Error in topic modal loader ', error.message)
  }
}

type Props = {}

function TopicContent({ }: Props) {
  const tecnos = useLoaderData() as Array<any>

  const tecnosForSelect = tecnos.map((item: any) => {
    return {
      label: item.name,
      optionId: item._id
    }
  });

  return (
    <React.Fragment>
      <div className="pb-3 mb-4 border-b-2 border-gray-200">
        <Text
          weight="bold"
        >
          Hamorona Singa
        </Text>
      </div>
      <div className='flex flex-col gap-3'>
        <Input
          placeholder="Lohateny"
          variant="primary"
          name="title"
        />
        <Input
          placeholder="Famariparitana"
          variant="primary"
          type="text-area"
          name="description"
        />
        <Select options={tecnosForSelect} selectName='tecnoId' />
      </div>
    </React.Fragment>
  )
}

export default TopicContent