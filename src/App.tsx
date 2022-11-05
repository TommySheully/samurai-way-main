import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import {StateType} from './Redux/State';

type AppType = {
    state: StateType
    addPost: (newPostTitle: string) => void
    changeNewPost: (newPostTitle: string) => void
    addMessage: (newMessageTitle: string) => void
    changeNewMessage: (newMessageTitle: string) => void
}

function App(props: AppType) {


    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path='/Profile'
                               element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost}
                                                 newPostText={props.state.profilePage.newPostText}
                                                 changeNewPost={props.changeNewPost}/>}/>
                        <Route path='/Dialogs'
                               element={<Dialogs dialogsData={props.state.dialogPage.dialogsData}
                                                 messageData={props.state.dialogPage.messageData}
                                                 addMessage={props.addMessage}
                                                 changeNewMessage={props.changeNewMessage}
                                                 newMessageText={props.state.dialogPage.newMessageText}
                               />}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
