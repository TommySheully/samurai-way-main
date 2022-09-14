import React from 'react';
import cssProfile from "./Posts.module.css"

type post = {
    message: string;
}

const Post = (props: post) => {
    return (
        <div className={cssProfile.item}>
            <img src='https://cdn.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg'
                 alt="imgProfile"/>
            {props.message}
        </div>
    )
};

export default Post;