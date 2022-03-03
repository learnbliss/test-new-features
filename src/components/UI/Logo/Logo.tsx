import React from 'react';
import styles from './Logo.module.css'
import logo from './../../../assets/logo.png'
import {useNavigate} from "react-router-dom";

interface LogoProps {

}

const Logo: React.FC<LogoProps> = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.root} onClick={() => navigate('/')}>
            <img src={logo} alt={'logo'}/>
        </div>
    );
};

export default Logo;
