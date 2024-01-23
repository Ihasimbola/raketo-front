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

        <img
          src={raketoImg}
          alt="raketo"
          width={60}
          height={60}
        />

        <div className="flex flex-row items-center gap-3">
          <Input
            placeholder='Hikaroka...'
            className="focus:border-gray-300 text-white placeholder:text-gray-300 pr-8"
          />
          <SearchIcon currentColor='text-gray-300' className="cursor-pointer hover:text-gray-100 absolute right-[74px]" />
          <DefaultUserIcon width={40} height={40} className='cursor-pointer hover:text-gray-200' currentColor='text-gray-300' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar