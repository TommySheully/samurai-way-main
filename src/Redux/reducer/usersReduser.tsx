import React from 'react';
import {v1} from "uuid";
import {ActionsType, AppStateType} from "../redux-store";
import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {api} from "../../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const UPDATE_COUNT = 'UPDATE-COUNT';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_FETCHING = 'TOGGLE-IS-FOLLOWING-FETCHING';

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
    pageSize: 7,
    totalUsersCount: 26,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: []
}

export type initialUserStateType = {
    users: userArrayType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingIsProgress: string[]
}


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
        case UPDATE_COUNT:
            return {...state, currentPage: action.newCurrentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.newFetching}
        case TOGGLE_IS_FOLLOWING_FETCHING: {
            return {
                ...state, followingIsProgress: action.followingIsProgressValue
                    ? [...state.followingIsProgress, action.id]
                    : state.followingIsProgress.filter(id => id != action.id)
            }
        }
    }
    return state
};

export const follow = (userId: string) => ({type: 'FOLLOW', userId: userId} as const);
export const unfollow = (userId: string) => ({type: 'UNFOLLOW', userId: userId} as const);
export const setUsers = (users: userArrayType) => ({type: 'SET-USERS', users: users} as const);
export const setTotalUsersCount = (totalCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount: totalCount
} as const);
export const updateCount = (newCurrentPage: number) => ({
    type: 'UPDATE-COUNT',
    newCurrentPage: newCurrentPage
} as const);
export const changeFetching = (newFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING',
    newFetching: newFetching
} as const);
export const toggleIsFollowingFetching = (followingIsProgressValue: boolean, id: string) => ({
    type: 'TOGGLE-IS-FOLLOWING-FETCHING',
    followingIsProgressValue: followingIsProgressValue,
    id: id
} as const);

// санки создаем и типы для них
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>

export const followThunk = (id: string): ThunkType => {
    return (dispatch: ThunkDispatchType, getState: () => AppStateType) => {
        dispatch(toggleIsFollowingFetching(true, id))

        api.follow(id).then(data => {  // делаем вызов метода (функции) follow в объекте api который делает запрос на сервер и возвращает объект, а не промис, потому что подписка происходит сразу в методе и возвращает response.data
            if (data.resultCode === 0) {  // проверка, если нет ошибок, делаем.
                unfollow(id) // меняем стейт на false что значит что мы уже подписались, и ui реагирует сменой кнопки на отписаться.
            }

            dispatch(toggleIsFollowingFetching(false, id))
        })
    }
}
export const unfollowThunk = (id: string): ThunkType => {
    return (dispatch: ThunkDispatchType, getState: () => AppStateType) => {

        dispatch(toggleIsFollowingFetching(true, id))
        api.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleIsFollowingFetching(false, id))
            })
    }
}
export const getUsersThunk = (totalUsersCount: number, pageSize: number): ThunkType => {
    return (dispatch: ThunkDispatchType, getState: () => AppStateType) => {
        dispatch(changeFetching(true))
        api.getUsers(totalUsersCount, pageSize) // эта функция возвращает промис, поэтому на новой строчке через.then мы на него и подписываемся
            .then((data) => {
                dispatch(changeFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}


export default usersReducer;