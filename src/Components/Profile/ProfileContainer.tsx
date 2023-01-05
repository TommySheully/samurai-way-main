import React from 'react';
import {ActionsType, AppStateType, setTotalUsersCountAC} from "../../Redux/redux-store";
import {
    changeFetching,
    follow,
    setTotalUsersCount,
    setUsers,
    unfollow,
    updateCount,
    userArrayType
} from "../../Redux/reducer/usersReduser";
import {connect} from "react-redux";
import ProfileAPIContainer from "./ProfileAPIContainer";
import {v1} from "uuid";
import {post} from "../../Redux/store";
import {AddPostObj, profileType, setUserProfile, upDatePostObj} from "../../Redux/reducer/ProfileDataReduser";


type mapStateToPropsType = {
    posts: Array<post>,
    newPostText: string,
    profile: profileType
}

type mapDispatchToPropsType = {
    upDatePostObj: (newPostTitle: string) => void
    AddPostObj: () => void
    setUserProfile: (newProfile: string) => void
}

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const ProfileContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    AddPostObj,
    upDatePostObj,
    setUserProfile,
})(ProfileAPIContainer);

export default ProfileContainer;