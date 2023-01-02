import React from 'react';
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import UsersClass from "./UsersClass";
import preorder from './giphy.gif'


class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.changeFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.totalUsersCount}&count=${this.props.pageSize}`).then((response) => {
            this.props.changeFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.updateCount(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {this.props.isFetching ? <img src={preorder} alt='loading'/> : null}
            <UsersClass
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
            />
        </div>
    }
}


export default UsersAPIComponent;