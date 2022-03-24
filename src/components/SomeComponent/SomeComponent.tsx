import React from 'react';
import styles from './SomeComponent.module.css'

interface SomeComponentProps {

}

const SomeComponent: React.FC<SomeComponentProps> = () => {
    return (
        <div className={styles.root}>
            что-то другое
        </div>
    );
};

export default SomeComponent;
