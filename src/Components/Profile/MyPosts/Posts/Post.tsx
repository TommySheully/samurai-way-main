import React from 'react';
import cssProfile from "./Posts.module.css"
import {post} from "../../../../Redux/store";

const Post = (props: post) => {
    return (
        <div className={cssProfile.parentsBlock}>
            <div className={cssProfile.item}>
                <div className={cssProfile.MessageBody}>
                    <img className={cssProfile.ava}
                         src='https://cdn.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg'
                         alt="imgProfile"/>
                    <div className={cssProfile.textMessage}>{props.message}</div>
                </div>
                <div className={cssProfile.dataBody}>
                    <div>{props.time}</div>
                    <div>Like {props.likesCount}</div>
                </div>
            </div>
        </div>
    )
};

export default Post;