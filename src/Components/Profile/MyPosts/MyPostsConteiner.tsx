import React from 'react';
import {AddPostObj, upDatePostObj} from "../../../Redux/reducer/ProfileDataReduser";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {ActionsType, post} from "../../../Redux/store";
import {Dispatch} from "redux";


/*const MyPostsContainer = () => {

    return (<MyContext.Consumer>
            {(store: storeType) => {
                const onChangePost = (newPostTitle: string) => {
                    store.dispatch(upDatePostObj(newPostTitle))
                }

                const addPostCollback = () => {
                    store.dispatch(AddPostObj())
                }


                return <MyPosts posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}
                                onChangePost={onChangePost}
                                addPostCollback={addPostCollback}/>
            }}
        </MyContext.Consumer>
    )
};*/

export type mapStateToProps = {
    posts: Array<post>
    newPostText: string
}

export type mapDispatchToPropsType = {
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