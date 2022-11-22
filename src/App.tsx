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
import {ActionsType, StateType} from './Redux/store';
import {initialDialogsDataStateType} from "./Redux/reducer/dialogsDataReduser";
import {initialprofilePageStateType} from "./Redux/reducer/ProfileDataReduser";
import {AppType} from "./Redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

type AppLocalType = {
    state: AppType
    dispatch: (action: ActionsType) => void
}


function App(props: AppLocalType) {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path='/Profile'
                               element={<Profile posts={props.state.profilePage.posts} // props.state.dialogPage.posts
                                                 dispatch={props.dispatch}
                                                 newPostText={props.state.profilePage.newPostText}
                               />}/>
                        <Route path='/Dialogs'
                               element={<DialogsContainer dialogsData={props.state.dialogPage.dialogsData}
                                                          messageData={props.state.dialogPage.messageData}
                                                          dispatch={props.dispatch}
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
