import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
import {initialDataStateType, setUserData} from "../../Redux/reducer/authReduser";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";


type mapStateToPropsType = {
    data: initialDataStateType
}
type mapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}
export type DataPropsType = mapDispatchToPropsType & mapStateToPropsType

class HeaderContainer extends React.Component<DataPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }


    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        data: state.auth
    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserData})(HeaderContainer);