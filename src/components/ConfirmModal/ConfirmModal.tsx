import React from 'react';
import styles from './ConfirmModal.module.css'
import BackDrop from "../UI/BackDrop/BackDrop";
import Button from "../UI/Button/Button";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {toggleConfirm} from "../../redux/reducers/confirmSlice";
import {confirmSelector} from "../../redux/selectors/confirmSelectors";

interface ConfirmModalProps {
}

const ConfirmModal: React.FC<ConfirmModalProps> = () => {

    const dispatch = useAppDispatch()
    const {message} = useAppSelector(confirmSelector)

    const setPositive = () => dispatch(toggleConfirm(true))
    const setNegative = () => dispatch(toggleConfirm(false))

    return (
        <BackDrop>
            <div className={styles.root}>
                <div>{message}</div>
                <div className={styles.confirm}>
                    <Button buttonName={'Да'} onClick={setPositive}/>
                    <Button buttonName={'Нет'} onClick={setNegative}/>
                </div>
            </div>
        </BackDrop>
    );
};

export default ConfirmModal;
