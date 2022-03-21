import React from 'react';
import styles from './ConfirmModal.module.css'
import BackDrop from "../UI/BackDrop/BackDrop";
import Button from "../UI/Button/Button";
import {UseConfirm} from "../../hooks/useConfirm";
import {useAppSelector} from "../../redux/hooks";
import {confirmSelector} from "../../redux/selectors/confirmSelectors";

interface ConfirmModalProps {
}

const ConfirmModal: React.FC<ConfirmModalProps> = () => {

    const {message} = useAppSelector(confirmSelector)
    const {setPositive, setNegative} = UseConfirm()

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
