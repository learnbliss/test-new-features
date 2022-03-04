import React, {useEffect} from 'react';
import {useDebounce} from "../../hooks/useDebounce";
import InputSearch from "../UI/InputSearch/InputSearch";
import useInput from "../../hooks/useInput";

interface FindProps {

}

const Find: React.FC<FindProps> = () => {

    const {value, onChange} = useInput('')
    const debounce = useDebounce(value, 1000)

    useEffect(() => {
        // будем начинать запрос от 3 символов и через 1 сек
        if (debounce && value.length > 2) {
            console.log(value, 'with timeout 1s')
        }
    }, [debounce]);

    return (
        <InputSearch value={value} onChange={onChange} placeholder={'Поиск'} type={'text'}/>
    )
};

export default Find;
