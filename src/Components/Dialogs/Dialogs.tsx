import React, {useState} from 'react';
import s from './Dialogs.module.css'

import {Message} from "./Messages/Messages";
import {DialogsItem} from "./Dialogs/DialogsItem";
import {dialogPage} from "../../Redux/State";
import {v1} from "uuid";


function Dialogs(props: dialogPage) {

    let [messageArray, setMessageArray] = useState(props.messageData)

    let dialogsElements = props.dialogsData.map((D) => <DialogsItem name={D.name} id={D.id}/>)
    let MessageElements = messageArray.map((M) => <Message message={M.message} id={M.id}
                                                           likesCount={M.likesCount}/>)

    let [title, setTitle] = useState("")

    const addNewMessage = () => {
        let newMessage = {message: title, id: v1(), likesCount: 0}
        setMessageArray([...messageArray, newMessage])
    }

    return (
        <div className={s.Dialogs}>

            <div className={s.DialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                {MessageElements}
                <input value={title} onChange={(event) => {
                    setTitle(event.currentTarget.value)
                }}></input>
                <button onClick={addNewMessage}>+</button>
            </div>
        </div>
    );
}

export default Dialogs;