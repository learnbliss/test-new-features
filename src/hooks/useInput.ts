import React, {useState} from 'react';

const useInput = (initialValue = '', required?: true) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
        setError('')
    }
    const onBlur = () => {
        if (!value && required) {
            setError('Обязательное поле')
        } else {
            setError('')
        }
    }
    return {value, onChange, onBlur, error};
}

export default useInput
