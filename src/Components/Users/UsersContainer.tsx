import React from 'react';
import {ActionsType, AppStateType} from "../../Redux/redux-store";
import {follow, setUsers, unfollow, userArrayType, userType} from "../../Redux/reducer/usersReduser";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";


export type mapStateToProps = {
    users: userArrayType
}

export  type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: userArrayType) => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {

    return {
        follow: (userId: string) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: userArrayType) => {
            dispatch(setUsers(users))
        }
    }
}

const UsersContainer = connect<mapStateToProps, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;