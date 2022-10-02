import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";

let posts = [
    {message: 'IT-incubator', likesCount: 12},
    {message: 'Hi, how are you?', likesCount: 24},
    {message: 'ITshechka', likesCount: 1},
    {message: 'My first post', likesCount: 100}
]

let dialogsData = [
    {name: 'Dimych', id: v1()},
    {name: 'Pasha', id: v1()},
    {name: 'Masha', id: v1()}
]

let messageData = [
    {message: 'Hi Dimych', id: v1(), likesCount: 12},
    {message: 'Hi Pasha', id: v1(), likesCount: 11},
    {message: 'Sry Masha', id: v1(), likesCount: 10}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogsData} message={messageData}/>,
    document.getElementById('root')
);