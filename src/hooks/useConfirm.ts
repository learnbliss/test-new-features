import {hideConfirm, showConfirm} from "../redux/reducers/confirmSlice";
import {useAppDispatch} from "../redux/hooks";

interface openConfirmProps {
    (message?: string): Promise<boolean>
}

let resolveCallback: (booleanArg: boolean) => void
export const UseConfirm = () => {
    const dispatch = useAppDispatch()

    const close = () => {
        dispatch(hideConfirm())
    }

    const setPositive = () => {
        resolveCallback(true)
        close()
    }

    const setNegative = () => {
        close()
    }

    const openConfirm: openConfirmProps = (message = 'Вы уверены?') => {
        dispatch(showConfirm(message))
        return new Promise(setPositive => {
            resolveCallback = setPositive;
        })
    }

    return {openConfirm, setPositive, setNegative}
}
