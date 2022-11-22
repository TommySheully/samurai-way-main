import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, post} from "../../Redux/store";
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
            <MyPostsContainer posts={props.posts}
                              newPostText={props.newPostText}
                              dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;