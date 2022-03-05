import React from 'react';
import styles from './Main.module.css'
import PostsList from "../PostsList/PostsList";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import {useAppSelector} from "../../redux/hooks";
import {confirmSelector} from "../../redux/selectors/confirmSelectors";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    const {isView} = useAppSelector(confirmSelector)
    return (
            <main className={styles.main}>
                <PostsList/>
                {isView && <ConfirmModal/>}
            </main>
    );
};

export default Main;
