import React from 'react';
import Post from "./Posts/Post";
import css from './MyPosts.module.css'

const MyPosts = () => {
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
                <Post message='Hi, how are you?' likesCount={0}/>
                <Post message='My first post' likesCount={23}/>
            </div>

        </div>
    )
};

export default MyPosts;