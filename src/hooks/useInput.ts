import React, {useState} from 'react';

const useInput = (initialValue = '', required?: true) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const [touched, setTouched] = useState(false)

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
    const onFocus = () => setTouched(true)
    const clearInput = () => setValue('')
    return {bind: {value, onChange, onBlur, error, onFocus}, clearInput, touched};
}

export default useInput
