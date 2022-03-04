import React from 'react';
import Button from "../UI/Button/Button";
import styles from './NewPost.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {postsSelector} from "../../redux/selectors/postSelectors";
import {setEditMode} from "../../redux/reducers/postSlice";
import FormNewPost from "../FormNewPost/FormNewPost";
import BackDrop from "../UI/BackDrop/BackDrop";

interface NewPostProps {

}

const NewPost: React.FC<NewPostProps> = () => {

    const {editMode} = useAppSelector(postsSelector)
    const dispatch = useAppDispatch()

    const toggleEditModeNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(setEditMode())
    }

    return (
        <>
            <Button buttonName={'Новая запись'} onClick={toggleEditModeNewPost} disabled={editMode}/>
            {editMode &&
                <BackDrop>
                    <div className={styles.newPost}>
                        <FormNewPost/>
                    </div>
                </BackDrop>}
        </>
    );
};

export default NewPost;
