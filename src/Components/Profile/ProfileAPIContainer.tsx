import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {ProfilePropsType} from "./ProfileContainer";


class ProfileAPIContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
            this.props.setUserProfile(response.data)
        })
    }


    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
};

export default ProfileAPIContainer;