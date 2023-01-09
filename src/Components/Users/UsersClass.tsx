import React from 'react';
import {Button} from "antd";
import s from "./Users.module.css"
import {userArrayType} from "../../Redux/reducer/usersReduser";
import {NavLink} from "react-router-dom";

type usersClassPropsType = {
    users: userArrayType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (p: number) => void,
    follow: (id: string) => void,
    unfollow: (id: string) => void
    followingIsProgress: string[]
}

let UsersClass = (props: usersClassPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) { // тут заменил pagesCount на число 25 что бы не отображались пока что все страницы
        pages.push(i)
    }

    const followHandler = (id: string) => {
        /*        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                    withCredentials: true,
                    headers: {"API-KEY": "99000c61-8984-4591-9a63-38904803d856"}
                })*/ //старый код axios
        /*        follow(id)
                    .then(data => {
                        if (data.resultCode === 0) {
                            props.unfollow(id)
                        }
                    })*/ // старый запрос из этой компоненты меняю на колбэк
        props.follow(id)
    }

    const unFollowHandler = (id: string) => {
        /*        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                    withCredentials: true,
                    headers: {"API-KEY": "99000c61-8984-4591-9a63-38904803d856"}
                })*/ //старый код axios
        /*        unfollow(id)
                    .then(data => {
                        if (data.resultCode === 0) {
                            props.follow(id)
                        }
                    })*/ // старый запрос из этой компоненты меняю на колбэк
        props.unfollow(id)
    }

    return <div className={s.container}>
        <div>
            {pages.map(p => p >= (props.currentPage - 12) && p < (props.currentPage + 12)
                ? (<span className={props.currentPage === p ? s.selectedPage : ""}
                         onClick={() => props.onPageChanged(p)}>{p} </span>) : null)}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span className={s.userContainer}>
                    <div className={s.avaBody}>
                        <div className={s.ava}>
                            <NavLink to={'/profile/' + u.id}>
                              <img
                                  src={u.photos.small != null ? u.photos.small : 'https://cdn.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg'}
                                  alt="imgProfile"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <Button disabled={props.followingIsProgress.some(id => id === u.id)}
                                                  onClick={() => unFollowHandler(u.id)}>Unfollow</Button> :
                                <Button disabled={props.followingIsProgress.some(id => id === u.id)}
                                        onClick={() => followHandler(u.id)}>Follow</Button>}
                        </div>
                    </div>
                    <div className={s.bodyMessage}>
                        <div className={s.bodyMessage1}>
                            <span className={s.name}>{u.name}</span>
                            <span className={s.text}>text message</span>
                        </div>
                       <div className={s.bodyMessage2}>
                        <span className={s.location}>{"city"}, {"country"}</span>
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


export default UsersClass;