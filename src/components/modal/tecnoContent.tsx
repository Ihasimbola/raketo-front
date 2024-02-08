import React, { useRef, useState } from 'react'
import Text from '../Text/Text'
import Input from '../Input/Input'
import { cn } from '../../lib/utils'
import { Plus } from 'lucide-react';
import Select from '../select';
import CategoryService from '../../services/categoryService';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const categories = await CategoryService.getCategories();
    return categories.data.map((item: any) => (
      { label: item.name, optionId: item._id }
    ))

  } catch (error) {
    console.error("Error in tecnoContent loader ", error);
  }
}

function TecnoContent() {
  const categories = useLoaderData() as Array<{ label: string, optionId: string }>;

  const [imgSrc, setImgSrc] = useState<any>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files?.length) {
      const file = URL.createObjectURL(ev.target.files[0])
      setImgSrc(file);
    }
  }


  return (
    <React.Fragment>
      <div className="pb-3 mb-4 border-b-2 border-gray-200">
        <Text
          weight="bold"
        >
          Hamorona Tekno
        </Text>
      </div>
      <div className='flex flex-col gap-3'>
        <Input
          placeholder="Ananran'ilay tecno..."
          variant="primary"
          name="name"
        />
        <Select options={categories} selectName='categoryId' />
        <div className={
          cn(["modal__logo flex flex-col justify-center items-center border border-gray-200 border-dashed cursor-pointer", `${imgSrc ? 'border-none' : ''}`])
        }
          onClick={() => {
            inputFileRef?.current?.click()
          }}
        >
          {!imgSrc && <Plus width={35} height={35} color="#000000a6" />}
          {
            imgSrc && (<img src={imgSrc} alt="logo" className="content__logo" />)
          }
          {
            !imgSrc && <Text>
              Ampidiro eto ny sary famantarana
            </Text>
          }
        </div>
        <Input
          placeholder="Ananran'ilay tecno..."
          variant="primary"
          type="file"
          name="icon"
          ref={inputFileRef}
          className='hidden'
          onChange={handleChange}
        />
      </div>
    </React.Fragment>
  )
}

export default TecnoContent