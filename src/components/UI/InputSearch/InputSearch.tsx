import React, {InputHTMLAttributes} from 'react';
import styles from './InputSearch.module.css'

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputSearch: React.FC<InputSearchProps> = ({value, onChange, ...props}) => {
    return (
        <label className={styles.label}>
            <input {...props} className={styles.input}
                   value={value} onChange={onChange}/>
        </label>
    );
};

export default InputSearch;
