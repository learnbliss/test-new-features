import {hideConfirm, showConfirm} from "../redux/reducers/confirmSlice";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {confirmSelector} from "../redux/selectors/confirmSelectors";
import {useEffect} from "react";

interface useConfirmProps {
    (
        onConfirm: () => void,
        message?: string,
        onCancel?: () => void,
    ): () => void;
}

export const UseConfirm: useConfirmProps = (onConfirm, message = 'Вы уверены?', onCancel) => {

    const dispatch = useAppDispatch()
    const {isPositive} = useAppSelector(confirmSelector)

    useEffect(() => {
        if (isPositive === true) {
            onConfirm();
            dispatch(hideConfirm());
        } else if (isPositive === false) {
            onCancel && onCancel();
            dispatch(hideConfirm());
        }
    }, [isPositive]);

    return () => {
        dispatch(showConfirm(message))
    }
}
