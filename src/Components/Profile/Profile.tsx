import React from 'react';
import cssProfile from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsArrayType} from "../../Redux/State";


const Profile = (props: postsArrayType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
};

export default Profile;