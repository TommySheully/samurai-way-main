/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State, {addPost} from './Redux/State';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={State} addPost={addPost}/>,
        document.getElementById('root')
    );
}
*/

import {rerenderEntireTree} from "./render";
import state from "./Redux/State";

rerenderEntireTree(state);


/*ReactDOM.render(
    <App state={State} addPost={addPost}/>,
    document.getElementById('root') );*/
