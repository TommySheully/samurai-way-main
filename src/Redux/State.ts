import {v1} from "uuid";


export type storeType = {
    _State: StateType
    addPost: (newPostTitle: string) => void
    changeNewPost: (newPostTitle: string) => void
    changeNewMessage: (newMessageTitle: string) => void
    addMessage: (newMessageTitle: string) => void
    subscriber: (observer: (props: StateType) => void) => void
    _rerenderEntireTree: (props: StateType) => void
    getState: () => StateType
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


let store: storeType = {
    _State: {
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
    },
    getState() {
        return store._State
    },
    _rerenderEntireTree(props: StateType) {
    },
    addPost(newPostTitle: string) {
        let newPost = {
            id: v1(),
            message: (newPostTitle),
            likesCount: 0
        }
        this._State.profilePage.posts.push(newPost)
        this._rerenderEntireTree(this._State);
    },
    changeNewPost(newPostTitle: string) {
        let newPostText = newPostTitle
        this._State.profilePage.newPostText = newPostText;
        this._rerenderEntireTree(this._State);
    },
    addMessage(newMessageTitle: string) {
        let newMessage = {
            message: (newMessageTitle),
            id: v1(),
            likesCount: 0
        }
        this._State.dialogPage.messageData.push(newMessage)
        this._rerenderEntireTree(this._State);
        console.log(newMessage)
    },
    changeNewMessage(newMessageTitle: string) {
        let newMessage = newMessageTitle
        this._State.dialogPage.newMessageText = newMessage;
        this._rerenderEntireTree(this._State);
    },
    subscriber(observer: (props: StateType) => void) {
        this._rerenderEntireTree = observer
    }
}

export default store;
// window.store = store; нужно вернуться