import React from 'react'
import Text from '../Text/Text'
import Input from '../Input/Input'

type Props = {}

function CategoryContent({ }: Props) {
  return (
    <React.Fragment>
      <div className="pb-3 mb-4 border-b-2 border-gray-200">
        <Text
          weight="bold"
        >
          Hamorona Sokajy
        </Text>
      </div>
      <div className='flex flex-col gap-3'>
        <Input
          placeholder="Anaran'ilay sokajy..."
          variant="primary"
          name="name"
        />
      </div>
    </React.Fragment>
  )
}

export default CategoryContent