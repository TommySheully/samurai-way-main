import React from 'react';
import cssHeader from "./header.module.css"
import {NavLink} from "react-router-dom";
import {DataPropsType} from "./HeaderContainer";


const Header = (props: DataPropsType) => {

    return (
        <header className={cssHeader.header}>
            <img src="https://cdn-icons-png.flaticon.com/512/36/36447.png" alt="logo"/>
            <div className={cssHeader.loginBlock}>
                {props.data.isAuth ? props.data.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
};

export default Header;