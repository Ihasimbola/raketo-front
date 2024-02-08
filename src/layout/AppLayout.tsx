import React, { useEffect, useRef, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { sidebarDataList } from "../data/sidbarData"
import "./style.scss";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import UserService from '../services/userService';
import { Button } from '../components/Button/Button';
import { Plus } from 'lucide-react';


type Props = {
  children?: React.ReactNode
}

function AppLayout({ children }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await UserService.userIsAuthentic();
        return res;
      } catch (error: any) {
        navigate('/login', {
          replace: true
        })
      }
    }

    verifyToken();
  }, [location]);

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar data={sidebarDataList} />
      <div className="app-content">
        <div className='flex flex-row justify-between pr-3'>
          <Breadcrumbs />
          <Button
            variant="primary"
            onClick={() => {
              navigate(`${location.pathname}/create`)
            }}
          >
            <Plus className="pr-[4px]" />
            Hamorona
          </Button>
        </div>
        <Outlet />
        {/* {children} */}
      </div>
    </div>
  )
}

export default AppLayout