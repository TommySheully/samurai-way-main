import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StateType, storeType} from "./Redux/State"
// storeType

let rerenderEntireTree = (props: StateType) => {
    ReactDOM.render(
        <App state={store._State}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);