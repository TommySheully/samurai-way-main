import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import UsersClass from "./UsersClass";
import Preloader from "../Preloader/Preloader";
import {api} from "../../API/API";
import {followThunk, getUsersThunk} from "../../Redux/reducer/usersReduser";


class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        /*        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.totalUsersCount}&count=${this.props.pageSize}`, {
            withCredentials: true
        })*/   // старый код axios запроса
        /*        this.props.changeFetching(true)
                api.getUsers(this.props.totalUsersCount, this.props.pageSize) // эта функция возвращает промис, поэтому на новой строчке через.then мы на него и подписываемся
                    .then((data) => {
                        this.props.changeFetching(false)
                        this.props.setUsers(data.items)
                        this.props.setTotalUsersCount(data.totalCount)
                    })*/ // старый код, мы тут подключаем санки и заменяем компоненту api на thunk
        this.props.getUsersThunk(this.props.totalUsersCount, this.props.pageSize) // вызов санки
    }

    onPageChanged = (p: number) => {
        this.props.updateCount(p)
        /*        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
                    withCredentials: true
                })*/   // эта функция возвращает промис, поэтому на новой строчке через.then мы на него и подписываемся

        api.getUsers(p, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
            })
    }

    followCallback = (id: string) => {
        /*        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                    withCredentials: true,
                    headers: {"API-KEY": "99000c61-8984-4591-9a63-38904803d856"}
                })*/ //старый код axios, заменили на вынесенную компоненту api
        /*        this.props.toggleIsFollowingFetching(true, id) // добавили крутилку при загрузке
                api.follow(id)
                    .then(data => {
                        if (data.resultCode === 0) {
                            this.props.unfollow(id)
                        }
                        this.props.toggleIsFollowingFetching(false, id) // убрали крутилку при загрузке
                    })*/ // старый код, мы тут подключаем санки и заменяем компоненту api на thunk

        this.props.followThunk(id) // вызов санки
    }

    unFollowCallback = (id: string) => {
        /*        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                    withCredentials: true,
                    headers: {"API-KEY": "99000c61-8984-4591-9a63-38904803d856"}
                })*/ //старый код axios
        /*
                this.props.toggleIsFollowingFetching(true, id)
                api.unfollow(id)
                    .then(data => {
                        if (data.resultCode === 0) {
                            this.props.follow(id)
                        }
                        this.props.toggleIsFollowingFetching(false, id)
                    })
        */  // старый код, мы тут подключаем санки и заменяем компоненту api на thunk
        this.props.unfollowThunk(id) // вызов санки
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