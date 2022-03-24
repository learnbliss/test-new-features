import React from 'react';
import styles from './Button.module.css'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    buttonName?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({children, buttonName, className, ...props}) => {
    console.log(props)
    return (
        <button {...props} className={`${styles.button} ${className}`}>
            {children || <span>{buttonName}</span>}
        </button>
    );
};

export default Button;
