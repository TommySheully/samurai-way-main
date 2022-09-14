import React from 'react';
import navCss from './NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={navCss.nav}>
            <div className={navCss.item}>
                <a>Profile</a>
            </div>
            <div className={navCss.item}>
                <a>Messages</a>
            </div>
            <div className={navCss.item}>
                <a>News</a>
            </div>
            <div className={navCss.item}>
                <a>Music</a>
            </div>
            <div className={navCss.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
};

export default NavBar;