import React, {useEffect} from 'react';
import {useDebounce} from "../../hooks/useDebounce";
import InputSearch from "../UI/InputSearch/InputSearch";
import useInput from "../../hooks/useInput";
import {useAppDispatch} from "../../redux/hooks";
import {setSearch} from "../../redux/reducers/postSlice";
import {fetchWithSearch} from "../../redux/actionCreators";

interface FindProps {

}

const Find: React.FC<FindProps> = () => {
    const dispatch = useAppDispatch()
    const {bind: {value, onChange}, clearInput} = useInput('')
    const debounce = useDebounce(value, 1000)

    useEffect(() => {
        dispatch(setSearch(value))
        dispatch(fetchWithSearch())
    }, [debounce]);

    return (
        <InputSearch value={value} onChange={onChange} placeholder={'Поиск'} type={'text'} clearInput={clearInput}/>
    )
};

export default Find;
