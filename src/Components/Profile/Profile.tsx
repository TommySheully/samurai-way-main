import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props: ProfilePropsType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} upDatePostObj={props.upDatePostObj}
                     AddPostObj={props.AddPostObj}/>
        </div>
    )
};

export default Profile;