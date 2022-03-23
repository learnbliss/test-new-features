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
    const clearInput = () => setValue('')
    return {bind: {value, onChange, onBlur, error}, clearInput};
}

export default useInput
