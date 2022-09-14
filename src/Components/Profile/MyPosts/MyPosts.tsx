import React from 'react';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?' likesCount={0}/>
            <Post message='My first post' likesCount={23}/>
        </div>
    )
};

export default MyPosts;