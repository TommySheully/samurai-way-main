import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import UsersClass from "./UsersClass";
import Preloader from "../Preloader/Preloader";
import {follow, getUsers, unfollow} from "../../API/API";


class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.changeFetching(true)
        /*        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.totalUsersCount}&count=${this.props.pageSize}`, {
            withCredentials: true
        })*/   // старый код axios запроса
        getUsers(this.props.totalUsersCount, this.props.pageSize) // эта функция возвращает промис, поэтому на новой строчке через.then мы на него и подписываемся
            .then((data) => {
                this.props.changeFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.updateCount(p)
        /*        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
                    withCredentials: true
                })*/   // эта функция возвращает промис, поэтому на новой строчке через.then мы на него и подписываемся

        getUsers(p, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
            })
    }

    followCallback = (id: string) => {
        /*        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                    withCredentials: true,
                    headers: {"API-KEY": "99000c61-8984-4591-9a63-38904803d856"}
                })*/ //старый код axios
        this.props.toggleIsFollowingFetching(true, id)
        follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(id)
                }
                this.props.toggleIsFollowingFetching(false, id)
            })

    }

    unFollowCallback = (id: string) => {
        /*        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                    withCredentials: true,
                    headers: {"API-KEY": "99000c61-8984-4591-9a63-38904803d856"}
                })*/ //старый код axios
        this.props.toggleIsFollowingFetching(true, id)
        unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(id)
                }
                this.props.toggleIsFollowingFetching(false, id)
            })

    }


    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersClass
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.followCallback}
                unfollow={this.unFollowCallback}
                followingIsProgress={this.props.followingIsProgress}
            />
        </div>
    }
}


export default UsersAPIComponent;