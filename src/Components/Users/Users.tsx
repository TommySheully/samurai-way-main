import React from 'react';
import {Button} from "antd";
import {userArrayType, userType} from "../../Redux/reducer/usersReduser";
import s from "./Users.module.css"
import axios from "axios";

type usersType = {
    users: userType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: userArrayType) => void
}

const Users = (props: usersType) => {

    if (props.users.length) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div className={s.container}>
            {
                props.users.map(u => <div key={u.id}>
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
    );
};

export default Users;