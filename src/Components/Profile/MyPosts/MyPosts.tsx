import React, {ChangeEvent} from 'react';
import Post from "./Posts/Post";
import css from './MyPosts.module.css'
import {post} from "../../../Redux/store";

export type MyPostsType = {
    posts: Array<post>
    newPostText: string
    upDatePostObj: (newPostTitle: string) => void
    AddPostObj: () => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.map((P) => <Post time={P.time} likesCount={P.likesCount} message={P.message}
                                                    id={P.id}/>)

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostTitle = e.currentTarget.value
        props.upDatePostObj(newPostTitle)
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostCollback = () => {
        if (newPostElement.current) {
            props.AddPostObj();
        }
    }

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onChangePostHandler}
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