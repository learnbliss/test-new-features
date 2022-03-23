import React from 'react';
import styles from './Header.module.css'
import BurgerMenuIcon from "../UI/BurgerMenuIcon/BurgerMenuIcon";
import Logo from "../UI/Logo/Logo";
import Find from "../Find/Find";
import NewPost from "../NewPost/NewPost";
import Login from '../Login/Login';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {useAppSelector} from "../../redux/hooks";
import {burgerMenuSelector} from "../../redux/selectors/burgerMenuSelectors";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
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
