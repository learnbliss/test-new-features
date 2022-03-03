import React from 'react';
import styles from './Header.module.css'
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import Logo from "../UI/Logo/Logo";
import Find from "../Find/Find";
import NewPost from "../NewPost/NewPost";
import Login from '../Login/Login';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className={styles.root}>
            <div className={styles.header}>
                <BurgerMenu/>
                <Logo/>
                <Find/>
                <NewPost/>
                <Login/>
            </div>
        </header>
    );
};

export default Header;
