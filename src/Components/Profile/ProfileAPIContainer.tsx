import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {ProfilePropsType} from "./ProfileContainer";
import {useParams} from 'react-router-dom';

export function withRouter(Children: any) {

    return (props: any) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileAPIContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`).then((response) => {
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

let ProfileContainerWithUrlData = withRouter(ProfileAPIContainer);

export default ProfileContainerWithUrlData;