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
    const {bind: inputProps, clearInput, touched} = useInput('')
    const debounce = useDebounce(inputProps.value, 1000)

    useEffect(() => {
        if (touched) {
            dispatch(setSearch(inputProps.value))
            dispatch(fetchWithSearch())
        }
    }, [debounce]);

    return (
        <InputSearch {...inputProps}
                     placeholder={'Поиск'}
                     type={'text'}
                     clearInput={clearInput}
        />
    )
};

export default Find;
