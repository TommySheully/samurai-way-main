import React from 'react';
import {actionAddMessage, actionUpDateMessage} from "../../Redux/reducer/dialogsDataReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {DialogsItem, Message} from "../../Redux/store";


export type mapStateToProps = {
    dialogsData: Array<DialogsItem>,
    messageData: Array<Message>,
    newMessageText: string
}

export type mapDispatchToPropsType = {
    updateNewMessage: (updateNewMessageText: string) => void
    addNewMessage: () => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messageData: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {

    return {
        updateNewMessage: (updateNewMessageText: string) => {
            dispatch(actionUpDateMessage(updateNewMessageText))
        },
        addNewMessage: () => {
            dispatch(actionAddMessage())
        }
    }
}

const DialogsContainer = connect<mapStateToProps, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;