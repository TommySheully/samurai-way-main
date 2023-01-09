import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import News from "./Components/News/News";
import {ActionsType} from './Redux/redux-store';
import {AppStateType} from "./Redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


export type AppLocalType = {
    state: AppStateType
    dispatch: (action: ActionsType) => void
}


function App() {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path='/Profile/:userId' element={<ProfileContainer/>}/>
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
