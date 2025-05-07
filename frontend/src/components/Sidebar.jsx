import React from 'react'
import "./Sidebar.css"
import { SidebarData } from './SidebarData'
const Sidebar = () => {
  return (
    <div className="Sidebar">
        <ul className="SidebarList">
            {SidebarData.map((val, key)=> {
                return (
                    <li onClick={()=> {
                        window.location.pathname=val.link
                    }} className="row" key={key}>
                        <div>{val.icon}</div>{" "}
                        <div>
                            {val.title}
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar
