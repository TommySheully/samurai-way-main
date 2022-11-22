import React from 'react';
import {v1} from "uuid";
import {ActionsType, dialogPage} from "../store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    dialogsData: [
        {name: 'Dimych', id: v1()},
        {name: 'Pasha', id: v1()},
        {name: 'Masha', id: v1()}
    ],
    messageData: [
        {message: 'Hi Dimych', id: v1(), likesCount: 12},
        {message: 'Hi Pasha', id: v1(), likesCount: 11},
        {message: 'Sry Masha', id: v1(), likesCount: 10},
    ],
    newMessageText: "",
}

export type initialDialogsDataStateType = typeof initialState;

const dialogsDataReducer = (state: initialDialogsDataStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            state.messageData.push({
                message: (state.newMessageText),
                id: v1(),
                likesCount: 0
            })
            state.newMessageText = ''
            break;
        case UPDATE_MESSAGE:
            let newMessage = action.newMessageTitle
            state.newMessageText = newMessage;
            break;
    }
    return state;
};


export const actionAddMessage = () => ({type: 'ADD-MESSAGE'} as const);
export const actionUpDateMessage = (updateNewMessageText: string) => ({
    type: 'UPDATE-MESSAGE',
    newMessageTitle: updateNewMessageText
} as const)

export default dialogsDataReducer;