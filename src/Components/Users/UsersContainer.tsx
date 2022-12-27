import React from 'react';
import {ActionsType, AppStateType} from "../../Redux/redux-store";
import {follow, setUsers, unfollow, userArrayType} from "../../Redux/reducer/usersReduser";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import UsersClass from "./UsersClass";


type mapStateToPropsType = {
    users: userArrayType
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: userArrayType) => void
}

export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType

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

const UsersContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;