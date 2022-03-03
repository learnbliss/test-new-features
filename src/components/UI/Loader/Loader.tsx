import React from 'react';
import styles from './Loader.module.css'

interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = () => {
    return (
        <div className={styles.root}>
            <div className={styles.ring}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
};

export default Loader;
