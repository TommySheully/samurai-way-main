import React from 'react';
import './App.css';


function App() {
    return (
        <div className="App-wrapper">
            <header className="header">
                <img src="https://cdn-icons-png.flaticon.com/512/36/36447.png" alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">Main content
                <div>
                    <img
                        src="https://sun9-88.userapi.com/impg/Yb3CROCd3_uwduaCMcUTmGdFv58w4HB3VuVnzg/KOylVH72HEo.jpg?size=905x661&quality=96&sign=47ec0b50464108c17a09f3f008bd41a5&type=album"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div> New post</div>
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default App;
