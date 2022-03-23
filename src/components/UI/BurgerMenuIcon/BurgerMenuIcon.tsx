import React from 'react';
import styles from './BurgerMenuIcon.module.css'
import {useAppDispatch} from "../../../redux/hooks";
import {toggleViewBurger} from "../../../redux/reducers/BurgerMenuSlice";

interface BurgerMenuIconProps {

}

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = () => {
    const dispatch = useAppDispatch()
    const openBurgerMenu = () => dispatch(toggleViewBurger())
    return (
        <div onClick={openBurgerMenu} className={styles.root}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default BurgerMenuIcon;
