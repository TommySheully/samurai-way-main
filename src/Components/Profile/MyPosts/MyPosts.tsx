import React from 'react';
import Post from "./Posts/Post";
import css from './MyPosts.module.css'
import {postsArrayType} from "../Profile";

const MyPosts = (props: postsArrayType) => {
    /*    let posts = [
            {message: 'IT-incubator', likesCount: 12},
            {message: 'Hi, how are you?', likesCount: 24},
            {message: 'ITshechka', likesCount: 1},
            {message: 'My first post', likesCount: 100}
        ]*/

    let postsElement = props.posts.map((P) => <Post likesCount={P.likesCount} message={P.message}/>)

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.Posts}>
                {postsElement}
            </div>

        </div>
    )
};

export default MyPosts;