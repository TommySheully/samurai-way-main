import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {AppType} from "./Redux/redux-store"
import MyContext from "./StoreContext";

// type StateType = {state: dialogPage | postsArrayType}

let rerenderEntireTree = (props: AppType) => {              // StateType заменил на AppType
    ReactDOM.render(
        <MyContext.Provider value={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        </MyContext.Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));