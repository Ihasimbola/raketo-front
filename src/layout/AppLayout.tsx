import React, { useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { sidebarDataList } from "../data/sidbarData"
import "./style.scss";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { Navigate, Outlet, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import UserService from '../services/userService';

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
        <Breadcrumbs />
        <Outlet />
        {/* {children} */}
      </div>
    </div>
  )
}

export default AppLayout