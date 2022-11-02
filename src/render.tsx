import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import State, {addPost, StateType} from './Redux/State';

export let rerenderEntireTree = (props: StateType) => {
    ReactDOM.render(
        <App state={State} addPost={addPost}/>,
        document.getElementById('root')
    );
}
