import React from 'react';
import {v1} from "uuid";
import {ActionsType} from "../redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type userArrayType = userType[]

export type userType = {
    id: string,
    followed: boolean,
    name: string,
    status: string,
    photos: {
        small: any,
        large: any
    }
}


let initialUserState = {
    users: [
        {
            id: v1(),
            followed: true,
            name: 'IT-incubator',
            status: "Online",
            photos: {
                small: "small",
                large: "large"
            }
        },
        {
            id: v1(),
            followed: false,
            name: 'Sasha',
            status: "Offline",
            photos: {
                small: "small",
                large: "large"
            }
        },
        {
            id: v1(),
            followed: false,
            name: 'Pasha',
            status: "Offline",
            photos: {
                small: "small",
                large: "large"
            }
        },
    ],
}

export type initialUserStateType = { users: userArrayType }


const usersReducer = (state: initialUserStateType = initialUserState, action: ActionsType) => {

    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
            return stateCopy
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
            return stateCopy
        }
        case SET_USERS:
            return {...state, users: action.users}
    }
    return state
};

export const follow = (userId: string) => ({type: 'FOLLOW', userId: userId} as const);
export const unfollow = (userId: string) => ({type: 'UNFOLLOW', userId: userId} as const);
export const setUsers = (users: userArrayType) => ({type: 'SET-USERS', users: users} as const);

export default usersReducer;