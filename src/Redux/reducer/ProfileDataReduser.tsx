import React from 'react';
import {v1} from "uuid";
import {ActionsType} from "../redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
    posts: [
        {id: v1(), message: 'IT-incubator', likesCount: 12},
        {id: v1(), message: 'Hi, how are you?', likesCount: 24},
        {id: v1(), message: 'ITshechka', likesCount: 1},
        {id: v1(), message: 'My first post', likesCount: 100}
    ],
    newPostText: "",
}

export type initialprofilePageStateType = typeof initialState;

const profilePageReducer = (state: initialprofilePageStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: (state.newPostText),
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts, newPost]
            stateCopy.newPostText = '';
            return stateCopy
        }
        case UPDATE_POST: {
            let stateCopy = {...state, newPostText: action.newPostTitle}
            return stateCopy
        }
    }
    return state
};

export const AddPostObj = () => ({type: 'ADD-POST'} as const);
export const upDatePostObj = (newPostTitle: string) => ({type: 'UPDATE-POST', newPostTitle: newPostTitle} as const);

export default profilePageReducer;