import React from 'react';
import styles from './Main.module.css'
import PostsList from "../PostsList/PostsList";
import {Route, Routes} from "react-router-dom";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path={'/'} element={<PostsList/>}/>
            </Routes>
        </main>
    );
};

export default Main;
