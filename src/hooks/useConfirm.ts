import {hideConfirm, showConfirm} from "../redux/reducers/confirmSlice";
import {useAppDispatch} from "../redux/hooks";

interface openConfirmProps {
    (message?: string): Promise<boolean>
}

// let resolveCallback: { (arg0: boolean): void; (value: boolean | PromiseLike<boolean>): void; };
let resolveCallback: { (arg0: boolean): void; (value: boolean | PromiseLike<boolean>): void; };
export const UseConfirm = () => {
    const dispatch = useAppDispatch()

    const close = () => {
        dispatch(hideConfirm())
    }

    const setPositive = () => {
        close()
        resolveCallback(true)
    }

    const setNegative = () => {
        close()
        resolveCallback(false)
    }

    const openConfirm: openConfirmProps = (message = 'Вы уверены?') => {
        dispatch(showConfirm(message))
        return new Promise(setPositive => {
            resolveCallback = setPositive;
        })
    }

    return {openConfirm, setPositive, setNegative}
}
