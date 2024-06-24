import React from 'react';
import { GoSearch } from "react-icons/go";
import { IoHome , IoSettingsSharp  } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from 'react-redux';


const Sidebar = () => {
  const {mode} = useSelector(state => state.mode)

    return (
        <div className={mode ? "sidebar" : "sidebar-active"}>
      <GoSearch className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <IoHome className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <BsPeopleFill className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <FaBookmark className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <FaHourglassHalf className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <LuShoppingCart className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
      <IoSettingsSharp className={mode ? 'sidebar-i' : "sidebar-i-active"}/>
    </div>
    );
}

export default Sidebar;
