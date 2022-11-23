import {combineReducers, createStore} from "redux";
import profilePageReducer from "./reducer/ProfileDataReduser";
import dialogsDataReducer from "./reducer/dialogsDataReduser";

export type storeType = typeof store;

export type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogsDataReducer,
})

let store = createStore(reducers);

export default store;