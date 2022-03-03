import {useEffect, useState} from "react";

interface useDebounceProps {
    (value: string, delay: number): string
}

export const useDebounce: useDebounceProps = (value, delay) => {

    const [debounceValue, setDebounceValue] = useState<string>(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(handle)
    }, [value]);
    return debounceValue
}

