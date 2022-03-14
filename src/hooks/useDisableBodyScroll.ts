import {useEffect} from "react";

export const useDisableBodyScroll = () => {
    useEffect((): () => void => {
        const originalStyle = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => document.body.style.overflow = originalStyle;
    }, []);
}
