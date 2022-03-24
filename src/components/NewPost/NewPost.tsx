import React from 'react';
import Button from "../UI/Button/Button";
import styles from './NewPost.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {editPostIdSelector, postIdSelector, postsSelector} from "../../redux/selectors/postSelectors";
import {setNewPostMode} from "../../redux/reducers/postSlice";
import FormNewPost from "../FormNewPost/FormNewPost";
import BackDrop from "../UI/BackDrop/BackDrop";
import {UseConfirm} from "../../hooks/useConfirm";

interface NewPostProps {

}

const NewPost: React.FC<NewPostProps> = () => {

    const {editMode} = useAppSelector(postsSelector)
    const id = useAppSelector(editPostIdSelector)
    const post = useAppSelector(postIdSelector(id))
    const dispatch = useAppDispatch()

    const {openConfirm} = UseConfirm()
    const newPostConfirm = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const isConfirmed = await openConfirm('Создать новый пост?')
        if (isConfirmed) {
            dispatch(setNewPostMode())
        }
    }

    return (
        <>
            <Button className={styles.notMobileView} buttonName={'Новая запись'} onClick={newPostConfirm} disabled={editMode}/>
            <Button className={styles.mobileView} onClick={newPostConfirm} disabled={editMode}>
                <span className="material-icons">edit</span>
            </Button>
            {editMode &&
                <BackDrop>
                    <div className={styles.newPost}>
                        <FormNewPost post={post}/>
                    </div>
                </BackDrop>}
        </>
    );
};

export default NewPost;
