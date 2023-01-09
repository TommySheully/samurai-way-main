import React from 'react';
import {AppStateType} from "../../Redux/redux-store";
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
import UsersAPIComponent from "./UsersAPIComponent";


type mapStateToPropsType = {
    users: userArrayType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: userArrayType) => void
    updateCount: (newCurrentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    changeFetching: (newFetching: boolean) => void
}

export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    updateCount,
    setTotalUsersCount,
    changeFetching
})(UsersAPIComponent);

export default UsersContainer;