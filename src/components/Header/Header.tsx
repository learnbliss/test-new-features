import React from 'react';
import styles from './Header.module.css'
import BurgerMenuIcon from "../UI/BurgerMenuIcon/BurgerMenuIcon";
import Logo from "../UI/Logo/Logo";
import Find from "../Find/Find";
import NewPost from "../NewPost/NewPost";
import Login from '../Login/Login';
import {useAppSelector} from "../../redux/hooks";
import {burgerMenuSelector} from "../../redux/selectors/UISelectors";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    console.log('render header')
    const isViewBurger = useAppSelector(burgerMenuSelector)
    return (
        <header className={styles.root}>
            <div className={styles.header}>
                <BurgerMenuIcon/>
                {isViewBurger && <BurgerMenu/>}
                <Logo/>
                <Find/>
                <NewPost/>
                <Login/>
            </div>
        </header>
    );
};

export default Header;
