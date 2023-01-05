import React from 'react';
import {v1} from "uuid";
import {ActionsType} from "../redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type profileType = {
    userId: any
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

let initialState = {
    posts: [
        {id: v1(), message: 'IT-incubator', likesCount: 12, time: new Date().toLocaleTimeString()},
        {id: v1(), message: 'Hi, how are you?', likesCount: 24, time: new Date().toLocaleTimeString()},
        {id: v1(), message: 'ITshechka', likesCount: 1, time: new Date().toLocaleTimeString()},
        {id: v1(), message: 'My first post', likesCount: 100, time: new Date().toLocaleTimeString()}
    ],
    newPostText: "",
    profile: {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'asa',
        fullName: 'asa',
        contacts: {
            github: 'asa',
            vk: 'asa',
            facebook: 'asa',
            instagram: 'asa',
            twitter: 'asa',
            website: 'asa',
            youtube: 'asa',
            mainLink: 'asa',
        },
        photos: {
            small: 'asa',
            large: 'asa'
        }
    }
}

export type initialprofilePageStateType = typeof initialState;
export type timeNowType = typeof timeNow;

let timeNow = new Date().toLocaleTimeString()

const profilePageReducer = (state: initialprofilePageStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: (state.newPostText),
                likesCount: 0,
                time: timeNow
            }
            let stateCopy = {...state}
            stateCopy.posts = [newPost, ...state.posts]
            stateCopy.newPostText = '';
            return stateCopy
        }
        case UPDATE_POST: {
            let stateCopy = {...state, newPostText: action.newPostTitle}
            return stateCopy
        }
        case SET_USER_PROFILE: {
            let stateCopy = {...state, profile: action.newProfile}
            return stateCopy
        }
    }
    return state
};

export const AddPostObj = () => ({type: 'ADD-POST'} as const);
export const upDatePostObj = (newPostTitle: string) => ({type: 'UPDATE-POST', newPostTitle: newPostTitle} as const);
export const setUserProfile = (newProfile: any) => ({type: 'SET-USER-PROFILE', newProfile: newProfile} as const);

export default profilePageReducer;