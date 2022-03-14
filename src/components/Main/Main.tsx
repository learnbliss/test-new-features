import React from 'react';
import styles from './Main.module.css'
import PostsList from "../PostsList/PostsList";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (
            <main className={styles.main}>
                <PostsList/>
            </main>
    );
};

export default Main;
