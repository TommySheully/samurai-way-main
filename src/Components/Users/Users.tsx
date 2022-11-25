import React from 'react';
import {Button} from "antd";
import {setUsers, userArrayType, userType} from "../../Redux/reducer/usersReduser";
import {v1} from "uuid";
import s from "./Users.module.css"

type usersType = {
    users: userType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: userArrayType) => void
}

const Users = (props: usersType) => {

    let addUsers = () => {
        setUsers([{
            id: v1(),
            followed: true,
            fullName: 'Dimych 2.0',
            status: "Online",
            location: {city: "Minsk", country: "Belarus"}
        },
            {
                id: v1(),
                followed: true,
                fullName: 'Dimych 3.0',
                status: "Online",
                location: {city: "Minsk", country: "Belarus"}
            }
        ])
    }

    return (
        <div className={s.container}>
            {
                props.users.map(u => <div key={u.id}>
                    <span className={s.userContainer}>
                    <div className={s.avaBody}>
                        <div className={s.ava}>
                            <img src='https://cdn.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg'
                                 alt="imgProfile"/></div>
                        <Button>Follow</Button>
                    </div>
                    <div className={s.bodyMessage}>
                        <div className={s.bodyMessage1}>
                            <span className={s.name}>{u.fullName}</span>
                            <span className={s.text}>text message</span>
                        </div>
                       <div className={s.bodyMessage2}>
                        <span className={s.location}>{u.location.city},
                            {u.location.country}</span>
                        <span className={s.status}>{u.status}</span>
                       </div>


                    </div>
                        </span>
                </div>)
            }
            <Button>Show More</Button>
            <Button onClick={addUsers}>Set Users</Button>
        </div>
    );
};

export default Users;