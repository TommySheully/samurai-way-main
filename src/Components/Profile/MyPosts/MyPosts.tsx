import React from 'react';
import Post from "./Posts/Post";
import css from './MyPosts.module.css'
import {postsArrayType} from "../../../Redux/State";

const MyPosts = (props: postsArrayType) => {

    let postsElement = props.posts.map((P) => <Post likesCount={P.likesCount} message={P.message}/>)


    const addPostCollback = () => {

    }

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={addPostCollback}>Add post
                    </button>
                </div>
            </div>
            <div className={css.Posts}>
                {postsElement}
            </div>

        </div>
    )
};

export default MyPosts;