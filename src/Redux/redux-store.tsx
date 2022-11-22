import {combineReducers, createStore} from "redux";
import profilePageReducer from "./reducer/ProfileDataReduser";
import dialogsDataReducer from "./reducer/dialogsDataReduser";
import {postsArrayType} from "./store";


type RootReducerType = typeof reducers;

export type AppType = ReturnType<RootReducerType>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogsDataReducer,
})

let store = createStore(reducers);


export default store;