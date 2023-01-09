import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import UsersClass from "./UsersClass";
import Preloader from "../Preloader/Preloader";
import {getUsers} from "../../API/API";


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

    render() {
        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersClass
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </div>
    }
}


export default UsersAPIComponent;