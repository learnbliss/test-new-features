import React from 'react';
import styles from './FormNewPost.module.css'
import Button from "../UI/Button/Button";
import useInput from "../../hooks/useInput";
import {IPost} from "../../types";
import {setEditMode} from "../../redux/reducers/postSlice";
import {addNewPost} from "../../redux/actionCreators";
import {useAppDispatch} from "../../redux/hooks";

interface FormNewPostProps {

}

const FormNewPost: React.FC<FormNewPostProps> = () => {

    const dispatch = useAppDispatch()
    const header = useInput('', true)
    const author = useInput('', true)
    const article = useInput('', true)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const post: IPost = {
            id: '',
            title: header.value,
            author: author.value,
            text: article.value,
            date: new Date()
        }
        dispatch(addNewPost(post))
        dispatch(setEditMode())
    }

    const setDisable = !(header.value && author.value && article.value)
    const cancelEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(setEditMode())
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.head}>
                <label className={styles.label}>
                    <input className={`${styles.input} ${header.error && styles.error}`}
                           placeholder={'Заголовок'} type="text"
                           maxLength={50} {...header}/>
                    {header.error && <span className={styles.errorMessage}>{header.error}</span>}
                </label>
                <Button buttonName={'Отмена'} onClick={cancelEditMode}/>
                <Button buttonName={'Сохранить'} type={'submit'} disabled={setDisable}/>
            </div>
            <div className={styles.author}>
                <label className={styles.label}>
                    <input className={`${styles.input} ${author.error && styles.error}`}
                           placeholder={'Автор'}
                           type={'text'}
                           maxLength={50} {...author}/>
                    {author.error && <span className={styles.errorMessage}>{author.error}</span>}
                </label>
            </div>
            <label className={styles.label}>
                            <textarea className={`${styles.input} ${styles.textarea} ${article.error && styles.error}`}
                                      placeholder={'введите текст...'}
                                      maxLength={600} {...article}/>
                {article.error && <span className={styles.errorMessage}>{article.error}</span>}
            </label>
        </form>
    );
};

export default FormNewPost;
