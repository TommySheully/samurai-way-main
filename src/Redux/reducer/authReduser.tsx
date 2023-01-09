import React from 'react';
import {ActionsType} from "../redux-store";

const SET_USER_DATA = 'SET-USER-DATA';

let initialDataState = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}

export type initialDataStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}


const authReducer = (state: initialDataStateType = initialDataState, action: ActionsType) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
    }
    return state
};

export const setUserData = (id: number, email: string, login: string) => ({
    type: 'SET-USER-DATA',
    data: {id, email, login}
} as const);

export default authReducer;