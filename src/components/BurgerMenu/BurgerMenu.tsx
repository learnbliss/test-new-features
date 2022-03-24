import React from 'react';
import BackDrop from "../UI/BackDrop/BackDrop";
import styles from './BurgerMenu.module.css'
import {useAppDispatch} from "../../redux/hooks";
import {toggleViewBurger} from "../../redux/reducers/UISlice";
import {NavLink} from "react-router-dom";

interface BurgerMenuProps {

}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
    const dispatch = useAppDispatch()
    const closeBurgerMenu = () => {
        dispatch(toggleViewBurger())
    }
    return (
        <BackDrop>
            <div onClick={closeBurgerMenu} className={styles.root}/>
            <div className={styles.panel}>
                <span onClick={closeBurgerMenu} className="material-icons">close</span>
                <nav className={styles.menu}>
                    <NavLink className={(navData) => (navData.isActive ? styles.active : styles.link)}
                        onClick={closeBurgerMenu} to={'/'}>Посты</NavLink>
                    <NavLink className={(navData) => (navData.isActive ? styles.active : styles.link)}
                        onClick={closeBurgerMenu} to={'/someComponent'}>Другой компонент</NavLink>
                </nav>
            </div>
        </BackDrop>
    );
};

export default BurgerMenu;
