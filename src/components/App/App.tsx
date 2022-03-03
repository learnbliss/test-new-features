import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;
