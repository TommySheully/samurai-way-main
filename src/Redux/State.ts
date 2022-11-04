import {v1} from "uuid";

let store = {
    _State: {
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

    },
}

export type AppType = {
    state: StateType
    addPost: (newPostTitle: string) => void
    changeNewPost: (newPostTitle: string) => void
    changeNewMessage: (newMessageTitle: string) => void
    addMessage: (newMessageTitle: string) => void

}

export type StateType = {
    profilePage: postsArrayType,
    dialogPage: dialogPage,
}

export type dialogPage = {
    dialogsData: Array<DialogsItem>,
    messageData: Array<Message>,
    newMessageText: string,
}

export type postsArrayType = {
    posts: Array<post>,
    newPostText: string,
}

export type post = {
    message: string;
    likesCount: number;
    id: string;
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

let rerenderEntireTree = (props: StateType) => {
}


export let State: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'IT-incubator', likesCount: 12},
            {id: v1(), message: 'Hi, how are you?', likesCount: 24},
            {id: v1(), message: 'ITshechka', likesCount: 1},
            {id: v1(), message: 'My first post', likesCount: 100}
        ],
        newPostText: "",
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
            {message: 'Sry Masha', id: v1(), likesCount: 10},
        ],
        newMessageText: "",
    }
}

export const addPost = (newPostTitle: string) => {
    let newPost = {
        id: v1(),
        message: (newPostTitle),
        likesCount: 0
    }
    State.profilePage.posts.push(newPost)
    rerenderEntireTree(State);
}

export const changeNewPost = (newPostTitle: string) => {
    let newPostText = newPostTitle
    State.profilePage.newPostText = newPostText;
    rerenderEntireTree(State);
}

export const addMessage = (newMessageTitle: string) => {
    let newMessage = {
        message: (newMessageTitle),
        id: v1(),
        likesCount: 0
    }
    State.dialogPage.messageData.push(newMessage)
    rerenderEntireTree(State);
    console.log(State)
}

export const changeNewMessage = (newMessageTitle: string) => {
    let newMessage = newMessageTitle
    State.dialogPage.newMessageText = newMessage;
    rerenderEntireTree(State);
}

export let subscriber = (observer: (props: StateType) => void) => {
    rerenderEntireTree = observer
}

export default State;