import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { sidebarDataList } from "../data/sidbarData"
import "./style.scss";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { Outlet } from 'react-router-dom';

type Props = {
  children?: React.ReactNode
}

function AppLayout({ children }: Props) {
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