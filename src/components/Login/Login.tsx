import React from 'react';
import Button from "../UI/Button/Button";
import styles from './Login.module.css'

interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {
    return (
        <div className={styles.root}>
            <Button buttonName={'Войти'}/>
        </div>
    );
};

export default Login;
