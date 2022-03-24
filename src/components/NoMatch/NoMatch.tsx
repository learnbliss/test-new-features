import React from 'react';
import styles from './NoMatch.module.css'
import {Link} from "react-router-dom";

interface NoMatchProps {

}

const NoMatch: React.FC<NoMatchProps> = () => {
    return (
        <div className={styles.root}>
            <h1>Not Found 404</h1>
            <p>
                <Link to={'/'}>
                    На главную
                </Link>
            </p>
        </div>
    );
};

export default NoMatch;
