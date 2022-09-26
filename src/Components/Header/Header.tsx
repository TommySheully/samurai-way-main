import React from 'react';
import cssHeader from "./header.module.css"

const Header = () => {
    return (
        <header className={cssHeader.header}>
            <img src="https://cdn-icons-png.flaticon.com/512/36/36447.png" alt="logo"/>
        </header>
    )
};

export default Header;