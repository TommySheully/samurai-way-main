import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {post} from "../../Redux/store";
import {AddPostObj, profileType, setUserProfile, upDatePostObj} from "../../Redux/reducer/ProfileDataReduser";
import axios from "axios";
import Profile from "./Profile";
import {useParams} from "react-router-dom";

type mapStateToPropsType = {
    posts: Array<post>,
    newPostText: string,
    profile: profileType,
    userId?: string
}
type mapDispatchToPropsType = {
    upDatePostObj: (newPostTitle: string) => void
    AddPostObj: () => void
    setUserProfile: (newProfile: string) => void
}
export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType


class ProfileContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        let userId = this.props.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
};


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const TakeParams = (props: ProfilePropsType) => {
    let {userId} = useParams()
    return <ProfileContainer {...props} userId={userId}/>
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    AddPostObj,
    upDatePostObj,
    setUserProfile,
})(TakeParams);