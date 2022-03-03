import React from 'react';
import Button from "../UI/Button/Button";

interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {
    return (
        <div>
            <Button buttonName={'Войти'}/>
        </div>
    );
};

export default Login;
