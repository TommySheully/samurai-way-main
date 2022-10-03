import React from 'react';
import s from './Dialogs.module.css'

import {Message} from "./Messages/Messages";
import {DialogsItem} from "./Dialogs/DialogsItem";
import {dialogPage} from "../../Redux/State";


function Dialogs(props: dialogPage) {

    let dialogsElements = props.dialogsData.map((D) => <DialogsItem name={D.name} id={D.id}/>)
    let MessageElements = props.messageData.map((M) => <Message message={M.message} id={M.id}
                                                                likesCount={M.likesCount}/>)

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