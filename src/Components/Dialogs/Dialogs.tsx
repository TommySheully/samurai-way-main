import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItem = {
    name: string;
    id: number;
}

type Message = {
    message: string;
}

const Message = (props: Message) => <div className={s.Message}>{props.message}</div>

const DialogsItem = (props: DialogsItem) => {
    let path = "/Dialogs/" + props.id;

    return <div className={s.Dialogs}>
        <NavLink to={path}
                 className={navData => navData.isActive ? s.active : s.Dialogs}>{props.name}</NavLink>
    </div>
}

function Dialogs(props: any) {
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                <DialogsItem name='Dimych' id={1}/>
                <DialogsItem name='Pasha' id={2}/>
                <DialogsItem name='Masha' id={3}/>
                <DialogsItem name='Guru' id={4}/>
            </div>
            <div className={s.Messages}>
                <Message message="Hi"/>
                <Message message="Sry"/>
                <Message message="Guru"/>
            </div>
        </div>
    );
}

export default Dialogs;
