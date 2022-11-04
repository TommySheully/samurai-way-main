import React from 'react';
import cssProfile from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {post, postsArrayType} from "../../Redux/State";


export type postsType = {
    posts: Array<post>
    addPost: (newPostTitle: string) => void
    newPostText: string,
    changeNewPost: (newPostTitle: string) => void
}

const Profile = (props: postsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     changeNewPost={props.changeNewPost}/>
        </div>
    )
};

export default Profile;