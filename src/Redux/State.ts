import {v1} from "uuid";

export type StateType = {
    profilePage: postsArrayType,
    dialogPage: dialogPage,
}

export type dialogPage = {
    dialogsData: Array<DialogsItem>,
    messageData: Array<Message>
}

export type postsArrayType = {
    posts: Array<post>
}

export type post = {
    message: string;
    likesCount: number;
}

export type DialogsItem = {
    name: string;
    id: string;
}

export type Message = {
    message: string;
    id: string;
    likesCount: number;
}

let State: StateType = {
    profilePage: {
        posts: [
            {message: 'IT-incubator', likesCount: 12},
            {message: 'Hi, how are you?', likesCount: 24},
            {message: 'ITshechka', likesCount: 1},
            {message: 'My first post', likesCount: 100}
        ]
    },
    dialogPage: {
        dialogsData: [
            {name: 'Dimych', id: v1()},
            {name: 'Pasha', id: v1()},
            {name: 'Masha', id: v1()}
        ],
        messageData: [
            {message: 'Hi Dimych', id: v1(), likesCount: 12},
            {message: 'Hi Pasha', id: v1(), likesCount: 11},
            {message: 'Sry Masha', id: v1(), likesCount: 10}
        ],
    }
}

export default State;