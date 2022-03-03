import React from 'react';
import styles from './BurgerMenu.module.css'

interface BurgerMenuProps {

}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
    return (
        <div className={styles.root}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default BurgerMenu;
