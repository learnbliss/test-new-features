import React from 'react';
import BackDrop from "../UI/BackDrop/BackDrop";
import styles from './BurgerMenu.module.css'
import {useAppDispatch} from "../../redux/hooks";
import {toggleViewBurger} from "../../redux/reducers/BurgerMenuSlice";

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
                    <ul>
                        <li>Меню 1</li>
                        <li>Меню 2</li>
                    </ul>
                </nav>
            </div>
        </BackDrop>
    );
};

export default BurgerMenu;
