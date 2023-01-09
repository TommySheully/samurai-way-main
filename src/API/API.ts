import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "99000c61-8984-4591-9a63-38904803d856"}
})


export const getUsers = (totalUsersCount: number, pageSize: number) => {
    return instance.get(`users?page=${totalUsersCount}&count=${pageSize}`, {
        withCredentials: true
    })
        .then((response => response.data))
};

export const follow = (id: string) => {
    return instance.post(`/follow/${id}`, {})
        .then((response => response.data))
};

export const unfollow = (id: string) => {
    return instance.delete(`/follow/${id}`, {})
        .then((response => response.data))
};

