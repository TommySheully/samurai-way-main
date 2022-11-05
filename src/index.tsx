import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StateType, storeType} from "./Redux/State"
// storeType

let rerenderEntireTree = (props: StateType) => {
    ReactDOM.render(
        <App state={store._State} addPost={store.addPost.bind(store)}
             changeNewPost={store.changeNewPost.bind(store)}
             addMessage={store.addMessage.bind(store)}
             changeNewMessage={store.changeNewMessage.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);