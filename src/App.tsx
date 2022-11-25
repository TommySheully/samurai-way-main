import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import {ActionsType} from './Redux/redux-store';
import store, {AppStateType} from "./Redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


export type AppLocalType = {
    state: AppStateType
    dispatch: (action: ActionsType) => void
}


function App() {

    let stateLocal = store.getState()
    let dispatchLocal = store.dispatch


    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path='/Profile'
                               element={<Profile posts={stateLocal.profilePage.posts} // props.state.dialogPage.posts
                                                 dispatch={dispatchLocal}
                                                 newPostText={stateLocal.profilePage.newPostText}
                               />}/>
                        <Route path='/Dialogs' element={<DialogsContainer/>}/>
                        <Route path='/News' element={<News/>}/> // нужно будет доделать контейнеры
                        <Route path='/Users' element={<UsersContainer/>}/>
                        <Route path='/Music' element={<Music/>}/> // нужно будет доделать контейнеры
                        <Route path='/Settings' element={<Setting/>}/> // нужно будет доделать контейнеры
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
