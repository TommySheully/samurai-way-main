import React from 'react';
import {AddPostObj, upDatePostObj} from "../../../Redux/reducer/ProfileDataReduser";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {ActionsType} from "../../../Redux/redux-store";
import {post} from "../../../Redux/store";
import {Dispatch} from "redux";

type mapStateToProps = {
    posts: Array<post>
    newPostText: string
}

type mapDispatchToPropsType = {
    onChangePost: (newPostTitle: string) => void
    addPostCollback: () => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {

    return {
        onChangePost: (newPostTitle: string) => {
            dispatch(upDatePostObj(newPostTitle))
        },
        addPostCollback: () => {
            dispatch(AddPostObj())
        }
    }
}

const MyPostsContainer = connect<mapStateToProps, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;