import React from 'react';
import {v1} from "uuid";
import {ActionsType} from "../redux-store";

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
        case ADD_MESSAGE: {
            let NewMessage = {
                message: (state.newMessageText),
                id: v1(),
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData, NewMessage]
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case UPDATE_MESSAGE: {
            let stateCopy = {...state, newMessageText: action.newMessageTitle}
            return stateCopy
        }
    }
    return state;
};


export const actionAddMessage = () => ({type: 'ADD-MESSAGE'} as const);
export const actionUpDateMessage = (updateNewMessageText: string) => ({
    type: 'UPDATE-MESSAGE',
    newMessageTitle: updateNewMessageText
} as const)

export default dialogsDataReducer;