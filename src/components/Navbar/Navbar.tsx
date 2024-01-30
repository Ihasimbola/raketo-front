import React from 'react'
import raketoImg from "../../assets/raketo.webp"
import Text from '../Text/Text'
import "./style.scss";
import { NavLink } from 'react-router-dom';
import Input from '../Input/Input';
import SearchIcon from '../icons/SearchIcon';
import DefaultUserIcon from '../icons/DefaultUserIcon';

type Props = {}

function Navbar({ }: Props) {
  return (
    <nav
      className="w-full bg-blue-900 py-4 px-4 nav-container"
    >
      <div
        className='flex flex-row gap-3 items-center justify-between'
      >
        <NavLink to="/">
          <Text
            as='h2'
            size="2xl"
            color="white"
            className='cursor-pointer'
          >
            Raketo
          </Text>
        </NavLink>

        <div className='relative flex-grow-[0.3]'>
          <Input
            variant="secondary"
            placeholder='Hikaroka...'
            className="focus:border-red-300 text-white placeholder:text-gray-300 pr-8 w-full"
          />
          <SearchIcon currentColor='text-gray-300' className=" search__icon cursor-pointer hover:text-red-300 absolute right-2" />

        </div>

        <div className="flex flex-row items-center gap-3 hover:cursor-pointer">
          <Text
            color="white"
          >
            Mombamomba anao
          </Text>
          <DefaultUserIcon width={40} height={40} className='cursor-pointer hover:text-gray-200' currentColor='text-gray-300' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar