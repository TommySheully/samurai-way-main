import React from 'react';
import {ActionsType, AppStateType, setTotalUsersCountAC} from "../../Redux/redux-store";
import {
    follow,
    setTotalUsersCount,
    setUsers,
    unfollow,
    updateCount,
    userArrayType
} from "../../Redux/reducer/usersReduser";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import UsersClass from "./UsersClass";
import UsersAPIComponent from "./UsersAPIComponent";


type mapStateToPropsType = {
    users: userArrayType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: userArrayType) => void
    updateCount: (newCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        updateCount: (newCurrentPage: number) => {
            dispatch(updateCount(newCurrentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount))
        }
    }
}

const UsersContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;