import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {post} from "../../Redux/store";
import {ActionsType} from "../../Redux/redux-store";
import MyPostsContainer from './MyPosts/MyPostsConteiner';


export type postsType = {
    posts: Array<post>
    newPostText: string,
    dispatch: (action: ActionsType) => void
}

const Profile = (props: postsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;