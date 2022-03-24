import React from 'react';
import styles from './Main.module.css'
import PostsList from "../PostsList/PostsList";
import {Route, Routes} from "react-router-dom";
import SomeComponent from "../SomeComponent/SomeComponent";
import NoMatch from "../NoMatch/NoMatch";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path={'/'} element={<PostsList/>}/>
                <Route path={'/someComponent'} element={<SomeComponent/>}/>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </main>
    );
};

export default Main;
