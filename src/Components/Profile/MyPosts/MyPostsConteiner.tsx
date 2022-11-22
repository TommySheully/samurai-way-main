import React from 'react';
import {postsType} from "../Profile";
import {AddPostObj, upDatePostObj} from "../../../Redux/reducer/ProfileDataReduser";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props: postsType) => {

    const onChangePost = (newPostTitle: string) => {
        props.dispatch(upDatePostObj(newPostTitle))
    }

    const addPostCollback = () => {
        props.dispatch(AddPostObj())
    }

    return <MyPosts posts={props.posts}
                    newPostText={props.newPostText}
                    onChangePost={onChangePost}
                    addPostCollback={addPostCollback}/>
};

export default MyPostsContainer;