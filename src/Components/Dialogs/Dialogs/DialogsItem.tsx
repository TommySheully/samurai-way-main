import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItem = {
    name: string;
    id: string;
}

export const DialogsItemComponents = (props: DialogsItem) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.Dialogs}>
            <NavLink to={path}
                     className={navData => navData.isActive ? s.active : s.Dialogs}>{props.name}</NavLink>
        </div>)
}