import React, {ChangeEvent, MouseEventHandler, useState} from 'react';
import Post from "./Posts/Post";
import css from './MyPosts.module.css'
import {postsArrayType} from "../../../Redux/State";
import {postsType} from "../Profile";


const MyPosts = (props: postsType) => {

    let postsElement = props.posts.map((P) => <Post likesCount={P.likesCount} message={P.message} id={P.id}/>)


    const textareaCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostTitle = e.currentTarget.value
        props.dispatch({type: 'UPDATE-POST', newPostTitle: newPostTitle})
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostCollback = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'ADD-POST'})
        }
    }

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={textareaCallback}
                        ref={newPostElement}/>

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