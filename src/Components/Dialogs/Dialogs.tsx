import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Messages/Messages";
import {DialogsItemComponents} from "./Dialogs/DialogsItem";
import {DialogsItem} from "../../Redux/State";

type dialogPage = {
    dialogsData: Array<DialogsItem>,
    messageData: Array<Message>,
    newMessageText: string,
    dispatch: (action: any) => void
}


function Dialogs(props: dialogPage) {

    let [messageArray, setMessageArray] = useState(props.messageData)

    let dialogsElements = props.dialogsData.map((D) => <DialogsItemComponents name={D.name} id={D.id}/>)
    let MessageElements = messageArray.map((M) => <Message message={M.message} id={M.id}
                                                           likesCount={M.likesCount}/>)


    const addNewMessage = () => {
        if (newMessageElement.current) {
            props.dispatch({type: 'ADD-MESSAGE', newMessageTitle: newMessageElement.current.value})
        }
//        props.changeNewMessage("") должны это сделать уже в стейте
    }

    const updateNewMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let updateNewMessageText = e.currentTarget.value;
        props.dispatch({type: 'UPDATE-MESSAGE', newMessageTitle: updateNewMessageText})
    }

    let newMessageElement = React.createRef<HTMLInputElement>();

    return (
        <div className={s.Dialogs}>

            <div className={s.DialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                {MessageElements}
                <input value={props.newMessageText}
                       onChange={updateNewMessage}
                       ref={newMessageElement}></input>
                <button onClick={addNewMessage}>+</button>
            </div>
        </div>
    );
}

export default Dialogs;