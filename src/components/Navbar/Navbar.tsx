import React from 'react'
import raketoImg from "../../assets/raketo.webp"
import Text from '../Text/Text'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav
      className="w-full bg-blue-900 py-4 px-4"
    >
      <div
        className='flex flex-row gap-3 items-center justify-between'
      >
        <img 
          src={raketoImg} 
          alt="raketo"
          width={60}
          height={60}
        />
        <Text
          as='h2'
          size="2xl"
          color="white"
        >
          Raketo
        </Text>
        <Text
          as='h2'
          size="xl"
          color="white"
        >
          login
        </Text>
      </div>
    </nav>
  )
}

export default Navbar