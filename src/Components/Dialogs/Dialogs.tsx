import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from 'uuid';
import {Message} from "./Messages/Messages";
import {DialogsItem} from "./Dialogs/DialogsItem";


function Dialogs(props: any) {
    let dialogsData = [
        {name: 'Dimych', id: v1()},
        {name: 'Pasha', id: v1()},
        {name: 'Masha', id: v1()}
    ]

    let messageData = [
        {message: 'Hi Dimych', id: v1(), likesCount: 12},
        {message: 'Hi Pasha', id: v1(), likesCount: 11},
        {message: 'Sry Masha', id: v1(), likesCount: 10}
    ]

    let dialogsElements = dialogsData.map((D) => <DialogsItem name={D.name} id={D.id}/>)
    let MessageElements = messageData.map((M) => <Message message={M.message} id={M.id} likesCount={M.likesCount}/>)

    return (
        <div className={s.Dialogs}>

            <div className={s.DialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                {MessageElements}
            </div>
        </div>
    );
}

export default Dialogs;