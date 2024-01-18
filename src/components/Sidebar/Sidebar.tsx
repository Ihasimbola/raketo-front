import React from 'react'
import Text from '../Text/Text'
import "./styles.scss";
import LogoutIcon from '../icons/LogoutIcon';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

type itemsType = {
  id: number,
  label: string,
  Icon: JSX.Element
}

type Props = {
  data: Array<itemsType>
}

const SidebarList = (props: itemsType) => {
  const { Icon, label } = props;
  const link = label.split(' ')[0].toLocaleLowerCase();
  return (
    <NavLink
      to={link}
      className={({ isPending, isActive }) => (
        cn((isActive ? "sidebar__item--active" : isPending ? "sidebar__item--pending" : " ") + " sidebar__item flex flex-row gap-2 py-2 cursor-pointer")
      )}
    >
      {Icon}
      <Text
        color="white"
        hover="text-hover"
      >
        {label}
      </Text>
    </NavLink>
  )
}

function Sidebar({ data }: Props) {
  return (
    <div
      className="w-fit absolute z-[1000] sidebar bg-blue-700 flex flex-col justify-between h-full"
    >
      <ul>
        {
          data.map((item: itemsType, idx: number) => (
            <SidebarList label={item.label} Icon={item.Icon} id={item.id} key={nanoid(12)} />
          ))
        }
      </ul>
      <div className='flex flex-row gap-2 cursor-pointer'>
        <LogoutIcon currentColor='white' />
        <Text
          color="white"
          hover="text-hover"
        >
          Hivoaka
        </Text>
      </div>
    </div>
  )
}

export default Sidebar