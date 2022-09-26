import React from 'react';
import navCss from './NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={navCss.nav}>
            <div className={navCss.item}>
                <a href="/Profile">Profile</a>
            </div>
            <div className={navCss.item}>
                <a href="/Dialogs">Messages</a>
            </div>
            <div className={navCss.item}>
                <a href="/News">News</a>
            </div>
            <div className={navCss.item}>
                <a href="/Music">Music</a>
            </div>
            <div className={navCss.item}>
                <a href="/Settings">Settings</a>
            </div>
        </nav>
    )
};

export default NavBar;