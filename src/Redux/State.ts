import {v1} from "uuid";


export type storeType = {
    _State: StateType
    subscriber: (observer: (props: StateType) => void) => void
    _rerenderEntireTree: (props: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = actionAddPost | actionUpDatePost | actionAddMessage | actionUpDateMessage

export type actionAddPost = {
    type: 'ADD-POST'
}
export type actionUpDatePost = {
    type: 'UPDATE-POST'
    newPostTitle: string
}

export type actionAddMessage = {
    type: 'ADD-MESSAGE'
}
export type actionUpDateMessage = {
    type: 'UPDATE-MESSAGE'
    newMessageTitle: string
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
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: v1(),
                message: (this._State.profilePage.newPostText),
                likesCount: 0
            }
            this._State.profilePage.posts.push(newPost)
            this._State.profilePage.newPostText = '';
            this._rerenderEntireTree(this._State);
        } else if (action.type === 'UPDATE-POST') {
            let newPostText = action.newPostTitle;
            this._State.profilePage.newPostText = newPostText;
            this._rerenderEntireTree(this._State);
            console.log(this._State.profilePage.newPostText)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                message: (this._State.dialogPage.newMessageText),
                id: v1(),
                likesCount: 0
            }
            this._State.dialogPage.messageData.push(newMessage)
            this._State.dialogPage.newMessageText = ''
            this._rerenderEntireTree(this._State);
        } else if (action.type === 'UPDATE-MESSAGE') {
            let newMessage = action.newMessageTitle
            this._State.dialogPage.newMessageText = newMessage;
            this._rerenderEntireTree(this._State);
            console.log(this._State.dialogPage.newMessageText)
        }
    },
    subscriber(observer
                   :
                   (props: StateType) => void
    ) {
        this._rerenderEntireTree = observer
    }
}

export default store;
// window.store = store; нужно вернуться