import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { sidebarDataList } from "../data/sidbarData"
import "./style.scss";

type Props = {
  children: React.ReactNode
}

function AppLayout({ children }: Props) {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar data={sidebarDataList} />
      <div className="app-content">
        {children}
      </div>
    </div>
  )
}

export default AppLayout