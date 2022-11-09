import {v1} from "uuid";
import dialogsDataReducer, {actionAddMessage, actionUpDateMessage} from "./reducer/dialogsDataReduser";
import profilePageReducer, {AddPostObj, upDatePostObj} from "./reducer/ProfileDataReduser";

export type storeType = {
    _State: StateType
    subscriber: (observer: (props: StateType) => void) => void
    _rerenderEntireTree: (props: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = actionAddPost | actionUpDatePost | actionAddMessage | actionUpDateMessage

export type actionAddPost = ReturnType<typeof AddPostObj>
export type actionUpDatePost = ReturnType<typeof upDatePostObj>
export type actionAddMessage = ReturnType<typeof actionAddMessage>
export type actionUpDateMessage = ReturnType<typeof actionUpDateMessage>


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
        dialogsDataReducer(this._State.dialogPage, action)
        profilePageReducer(this._State.profilePage, action)
        this._rerenderEntireTree(this._State);
    },
    subscriber(observer: (props: StateType) => void) {
        this._rerenderEntireTree = observer;
    }
}

export default store;