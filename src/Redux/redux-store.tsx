import {combineReducers, createStore} from "redux";
import dialogsDataReducer, {actionAddMessage, actionUpDateMessage} from "./reducer/dialogsDataReduser";
import profilePageReducer, {AddPostObj, upDatePostObj} from "./reducer/ProfileDataReduser";
import usersReducer, {follow, setUsers, unfollow} from "./reducer/usersReduser";

export type ActionsType =
    actionAddPost
    | actionUpDatePost
    | actionAddMessage
    | actionUpDateMessage
    | followAC
    | unfollowAC
    | setUsersAC


export type actionAddPost = ReturnType<typeof AddPostObj>
export type actionUpDatePost = ReturnType<typeof upDatePostObj>
export type actionAddMessage = ReturnType<typeof actionAddMessage>
export type actionUpDateMessage = ReturnType<typeof actionUpDateMessage>
export type followAC = ReturnType<typeof follow>
export type unfollowAC = ReturnType<typeof unfollow>
export type setUsersAC = ReturnType<typeof setUsers>


export type storeType = typeof store;

export type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogsDataReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

export default store;