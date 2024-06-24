import React from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useDispatch , useSelector } from 'react-redux';
import { modeon } from '../../redux/DLmode/DLmode';

const Navbar = () => {
  const dispatch = useDispatch()
  const {mode} = useSelector(state => state.mode)


  const modeFuntion = ()=>{
  dispatch(modeon())
  console.log(mode);
  }

    return (
        
            <div className={mode ? "navbar" : "navbar-active"}>
      <div className="navbar-wrapper">
        <div className="logo-wrapper">
        <img
          className="login-logoo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        </div>

        <div className="menu-container">

          <input type="text" name="" id="searh-input" className="searh-input" placeholder="Filim Arayın..."/>
        </div>
        <div className="profile-container" id="profile-container">
        <select name="user" className="user">
              <option value="eyup">Eyup</option>
              <option value="burçak">Emly</option>
              <option value="furkan">Furkan</option>
              <option value="emma">Emma</option>
            </select>
          <div className="profile-text-container">
            <div className={mode ? "toggle" : "toggle-active"}>
              <FaMoon color='goldenrod'/>
              <IoSunnySharp color='goldenrod'/>
              <div onClick={modeFuntion} className={mode ? "toggle-ball" : "toggle-ball-active"}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Navbar;
