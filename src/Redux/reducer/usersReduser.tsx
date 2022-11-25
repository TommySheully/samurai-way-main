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
    fullName: string,
    status: string,
    location: { city: string, country: string }
}

let initialUserState = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: 'IT-incubator',
            status: "Online",
            location: {city: "Minsk", country: "Belarus"}
        },
        {id: v1(), followed: true, fullName: 'Dimych', status: "Online", location: {city: "Minsk", country: "Belarus"}},
        {id: v1(), followed: true, fullName: 'NAME', status: "Online", location: {city: "Piter", country: "RU"}},
        {
            id: v1(),
            followed: false,
            fullName: 'Sasha',
            status: "Offline",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Pasha',
            status: "Offline",
            location: {city: "Minsk", country: "Belarus"}
        },
    ],
}

export type initialUserStateType = typeof initialUserState;

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
            return {...state, users: [...state.users, ...action.users]}
    }
    return state
};

export const follow = (userId: string) => ({type: 'FOLLOW', userId: userId} as const);
export const unfollow = (userId: string) => ({type: 'UNFOLLOW', userId: userId} as const);
export const setUsers = (users: userArrayType) => ({type: 'SET-USERS', users: users} as const);

export default usersReducer;