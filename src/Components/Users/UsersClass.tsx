import React from 'react';
import {Button} from "antd";
import s from "./Users.module.css"
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import {updateCountAC} from "../../Redux/redux-store";

class UsersClass extends React.Component<UsersPropsType> {

    componentDidMount() {

    }

    onPageChanged = (p: number) => {
        this.props.updateCount(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages: number[] = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.container}>
            <div>
                {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : ""}
                                      onClick={() => this.onPageChanged(p)}>{p}</span>)}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span className={s.userContainer}>
                    <div className={s.avaBody}>
                        <div className={s.ava}>
                            <img
                                src='https://cdn.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg'
                                alt="imgProfile"/></div>
                        <Button>Follow</Button>
                    </div>
                    <div className={s.bodyMessage}>
                        <div className={s.bodyMessage1}>
                            <span className={s.name}>{u.name}</span>
                            <span className={s.text}>text message</span>
                        </div>
                       <div className={s.bodyMessage2}>
                        <span className={s.location}>{"city"},
                            {"country"}</span>
                        <span className={s.status}>{u.status}</span>
                       </div>
                    </div>
                        </span>
                </div>)
            }
            <Button>Show More</Button>
            <Button>Set Users from API</Button>
        </div>
    }
}


export default UsersClass;