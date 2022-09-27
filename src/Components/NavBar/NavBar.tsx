import React from 'react';
import navCss from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={navCss.nav}>
            <div className={navCss.item}>
                <NavLink to="/Profile"
                         className={navData => navData.isActive ? navCss.active : navCss.item}>Profile</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/Dialogs"
                         className={navData => navData.isActive ? navCss.active : navCss.item}>Messages</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/News" className={navData => navData.isActive ? navCss.active : navCss.item}>News</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/Music"
                         className={navData => navData.isActive ? navCss.active : navCss.item}>Music</NavLink>
            </div>
            <div className={navCss.item}>
                <NavLink to="/Settings"
                         className={navData => navData.isActive ? navCss.active : navCss.item}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default NavBar;