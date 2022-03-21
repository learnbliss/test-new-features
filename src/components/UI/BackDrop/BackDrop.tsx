import React from "react";
import styles from './BackDrop.module.css'
import {useDisableBodyScroll} from "../../../hooks/useDisableBodyScroll";

interface BackDropProps {

}

const BackDrop: React.FC<BackDropProps> = ({children}) => {
    useDisableBodyScroll()
    return (
        <div className={styles.backDrop}>
            {children}
        </div>
    );
};

export default BackDrop;
