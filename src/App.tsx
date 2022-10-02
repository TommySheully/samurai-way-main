import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile, {postsArrayType} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import News from "./Components/News/News";
import {Message} from "./Components/Dialogs/Messages/Messages";
import {DialogsItem} from "./Components/Dialogs/Dialogs/DialogsItem";
import {post} from "./Components/Profile/MyPosts/Posts/Post";

export type AppType = {
    posts: Array<post>,
    dialogs: Array<DialogsItem>,
    message: Array<Message>
}

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path='/Profile' element={<Profile posts={props.posts}/>}/>
                        <Route path='/Dialogs'
                               element={<Dialogs posts={props.posts} dialogs={props.dialogs}
                                                 message={props.message}/>}/>
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
