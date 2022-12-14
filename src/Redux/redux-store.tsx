import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsDataReducer, {actionAddMessage, actionUpDateMessage} from "./reducer/dialogsDataReduser";
import profilePageReducer, {AddPostObj, setUserProfile, upDatePostObj} from "./reducer/ProfileDataReduser";
import authReducer, {setUserData} from "./reducer/authReduser";
import usersReducer, {
    changeFetching,
    follow,
    setTotalUsersCount,
    setUsers, toggleIsFollowingFetching,
    unfollow,
    updateCount
} from "./reducer/usersReduser";
import thunk from "redux-thunk";

export type ActionsType =
    actionAddPost
    | actionUpDatePost
    | actionAddMessage
    | actionUpDateMessage
    | followAC
    | unfollowAC
    | setUsersAC
    | updateCountAC
    | setTotalUsersCountAC
    | changeFetchingAC
    | setUserProfileAC
    | setUserDataAC
    | toggleIsFollowingFetchingAC


export type actionAddPost = ReturnType<typeof AddPostObj>
export type actionUpDatePost = ReturnType<typeof upDatePostObj>
export type actionAddMessage = ReturnType<typeof actionAddMessage>
export type actionUpDateMessage = ReturnType<typeof actionUpDateMessage>
export type followAC = ReturnType<typeof follow>
export type unfollowAC = ReturnType<typeof unfollow>
export type setUsersAC = ReturnType<typeof setUsers>
export type updateCountAC = ReturnType<typeof updateCount>
export type setTotalUsersCountAC = ReturnType<typeof setTotalUsersCount>
export type changeFetchingAC = ReturnType<typeof changeFetching>
export type setUserProfileAC = ReturnType<typeof setUserProfile>
export type setUserDataAC = ReturnType<typeof setUserData>
export type toggleIsFollowingFetchingAC = ReturnType<typeof toggleIsFollowingFetching>


export type storeType = typeof store;

export type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogsDataReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;