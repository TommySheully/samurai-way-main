import React from 'react';
import {AddPostObj, upDatePostObj} from "../../../Redux/reducer/ProfileDataReduser";
import MyPosts from "./MyPosts";
import MyContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (<MyContext.Consumer>
            {(store) => {
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
};

export default MyPostsContainer;