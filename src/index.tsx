import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/redux-store"
import {Provider} from "react-redux";

// type StateType = {state: dialogPage | postsArrayType}

let rerenderEntireTree = () => {              //props:AppStateType, вообще удалил yf 45уроке &    44 урок StateType заменил на AppStateType
    ReactDOM.render(
        <Provider store={store}>
            {/*            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,*/}
            <App/>,
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(() => rerenderEntireTree());