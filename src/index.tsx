import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State, {addMessage, addPost, changeNewMessage, changeNewPost, StateType, subscriber} from './Redux/State';

let rerenderEntireTree = (props: StateType) => {
    ReactDOM.render(
        <App state={State} addPost={addPost} changeNewPost={changeNewPost} addMessage={addMessage}
             changeNewMessage={changeNewMessage}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(State);

subscriber(rerenderEntireTree);