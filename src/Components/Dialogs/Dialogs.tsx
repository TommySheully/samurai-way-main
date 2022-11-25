import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message, MessageType} from "./Messages/Messages";
import {DialogsItemComponents} from "./Dialogs/DialogsItem";
import {DialogsItem} from "../../Redux/store";

type dialogPage = {
    dialogsData: Array<DialogsItem>,
    messageData: Array<MessageType>,
    newMessageText: string,
    addNewMessage: () => void
    updateNewMessage: (updateNewMessageText: string) => void
}


function Dialogs(props: dialogPage) {

    let dialogsElements = props.dialogsData.map((D) => <DialogsItemComponents name={D.name} id={D.id}/>)
    let MessageElements = props.messageData.map((M) => <Message message={M.message} id={M.id}
                                                                likesCount={M.likesCount}/>)


    const addNewMessage = () => {
        if (newMessageElement.current) {
            props.addNewMessage()
        }
//        props.changeNewMessage("") должны это сделать уже в стейте
    }

    const updateNewMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let updateNewMessageText = e.currentTarget.value;
        props.updateNewMessage(updateNewMessageText)
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