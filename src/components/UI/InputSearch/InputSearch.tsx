import React, {InputHTMLAttributes} from 'react';
import styles from './InputSearch.module.css'

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    clearInput: () => void
}

const InputSearch: React.FC<InputSearchProps> = ({value, onChange, clearInput, ...props}) => {
    return (
        <label className={styles.label}>
            <input {...props} className={styles.input}
                   value={value} onChange={onChange}/>
            {value && <span onClick={clearInput} className="material-icons">close</span>}
        </label>
    );
};

export default InputSearch;
