import React from 'react';
import {v1} from "uuid";
import {ActionsType, dialogPage, postsArrayType} from "../State";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const profilePageReducer = (state: postsArrayType, action: ActionsType) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: v1(),
            message: (state.newPostText),
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = '';
    } else if (action.type === UPDATE_POST) {
        let newPostText = action.newPostTitle;
        state.newPostText = newPostText;
    }
    return state
};

export const AddPostObj = () => ({type: 'ADD-POST'} as const);
export const upDatePostObj = (newPostTitle: string) => ({type: 'UPDATE-POST', newPostTitle: newPostTitle} as const);

export default profilePageReducer;