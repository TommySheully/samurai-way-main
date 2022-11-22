import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {dialogPage, postsArrayType, StateType} from "./Redux/store"
import store, {AppType} from "./Redux/redux-store"

// type StateType = {state: dialogPage | postsArrayType}

let rerenderEntireTree = (props: AppType) => {              // StateType заменил на AppType
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));