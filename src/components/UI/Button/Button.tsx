import React from 'react';
import styles from './Button.module.css'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    buttonName: string,
}

const Button: React.FC<ButtonProps> = ({buttonName, ...props}) => {
    return (
        <button {...props} className={styles.button}><div>{buttonName}</div></button>
    );
};

export default Button;
