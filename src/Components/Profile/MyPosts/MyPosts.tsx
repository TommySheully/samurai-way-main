import React from 'react';
import Post from "./Posts/Post";

const MyPosts = (props) => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?'/>
            <Post message='My first post'/>
        </div>
    )
};

export default MyPosts;