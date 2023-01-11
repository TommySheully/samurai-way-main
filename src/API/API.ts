import axios, {ResponseType} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "99000c61-8984-4591-9a63-38904803d856"}
})


export const api = {
    /*    getUsers(totalUsersCount: number, pageSize: number) {
            return instance.get(`users?page=${totalUsersCount}&count=${pageSize}`, {
                withCredentials: true
            })
                .then((response => response.data))
        },*/
    getUsers(totalUsersCount: number, pageSize: number) {
        return instance.get(`users?page=${totalUsersCount}&count=${pageSize}`)
            .then((response => response.data))
    },
    follow(id: string) {
        return instance.post(`/follow/${id}`, {})
            .then((response => response.data))
    },
    unfollow(id: string) {
        return instance.delete(`/follow/${id}`, {})
            .then((response => response.data))
    },
    getUsersId(userId: string) {
        return instance.get(`/profile/${userId}`)
            .then((response => response.data))
    }

}

/*
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
};*/  // выше мы переносим наши функциии в метод объекта и укорачиваем код и способ вызова.
