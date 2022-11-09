import React from 'react';
import cssProfile from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {post, postsArrayType} from "../../Redux/State";


export type postsType = {
    posts: Array<post>
    newPostText: string,
    dispatch: (action: any) => void
}

const Profile = (props: postsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;