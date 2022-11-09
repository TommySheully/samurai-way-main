import React from 'react';
import {v1} from "uuid";
import {ActionsType, dialogPage} from "../State";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsDataReducer = (state: dialogPage, action: ActionsType) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            message: (state.newMessageText),
            id: v1(),
            likesCount: 0
        }
        state.messageData.push(newMessage)
        state.newMessageText = ''

    } else if (action.type === UPDATE_MESSAGE) {
        let newMessage = action.newMessageTitle
        state.newMessageText = newMessage;
    }
    return state;
};

export const actionAddMessage = () => ({type: 'ADD-MESSAGE'} as const);
export const actionUpDateMessage = (updateNewMessageText: string) => ({
    type: 'UPDATE-MESSAGE',
    newMessageTitle: updateNewMessageText
} as const)

export default dialogsDataReducer;