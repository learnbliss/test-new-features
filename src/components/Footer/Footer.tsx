import React from 'react';
import styles from './Footer.module.css'
import {useNavigate} from "react-router-dom";

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    const navigate = useNavigate();
    console.log('render footer')
    return (
        <footer className={styles.footerWrap}>
            <span onClick={() => navigate('/')} className="material-icons">home</span>
            <span className="material-icons">login</span>
        </footer>
    );
};

export default Footer;
