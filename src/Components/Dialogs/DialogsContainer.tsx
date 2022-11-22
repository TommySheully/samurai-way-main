import React, {ChangeEvent, useState} from 'react';
import {Message} from "./Messages/Messages";
import {DialogsItemComponents} from "./Dialogs/DialogsItem";
import {ActionsType, DialogsItem} from "../../Redux/store";
import {actionAddMessage, actionUpDateMessage} from "../../Redux/reducer/dialogsDataReduser";
import Dialogs from "./Dialogs";

type dialogContainerPage = {
    dialogsData: Array<DialogsItem>,
    messageData: Array<Message>,
    newMessageText: string,
    dispatch: (action: ActionsType) => void
}


function DialogsContainer(props: dialogContainerPage) {

    const addNewMessage = () => {
        props.dispatch(actionAddMessage())
//        props.changeNewMessage("") должны это сделать уже в стейте
    }

    const updateNewMessage = (updateNewMessageText: string) => {
        props.dispatch(actionUpDateMessage(updateNewMessageText))
    }

    return (
        <Dialogs addNewMessage={addNewMessage}
                 updateNewMessage={updateNewMessage}
                 dialogsData={props.dialogsData}
                 messageData={props.messageData}
                 newMessageText={props.newMessageText}
        />
    );
}

export default DialogsContainer;