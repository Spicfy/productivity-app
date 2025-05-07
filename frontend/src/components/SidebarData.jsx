import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";
import React from 'react'

export const  SidebarData = [
    {
        title: "Home" ,
        icon: <FaHome /> ,
        link: "/home"
    },
    {
        title: "My Profile",
        icon: <CgProfile />,
        link: "/profile"
    },
    {
        title: "statistics",
        icon: <IoIosStats />,
        link: "/statistics"
    },
    {
        title: "Settings",
        icon: <CiSettings />,
        link: "/settings"
    }
]


