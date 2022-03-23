import React from 'react';
import styles from './FormNewPost.module.css'
import Button from "../UI/Button/Button";
import useInput from "../../hooks/useInput";
import {IPost} from "../../types";
import {setNewPostMode} from "../../redux/reducers/postSlice";
import {addNewPost, setUpdatePost} from "../../redux/actionCreators";
import {useAppDispatch} from "../../redux/hooks";
import {UseConfirm} from "../../hooks/useConfirm";

interface FormNewPostProps {
    post?: IPost
}

const FormNewPost: React.FC<FormNewPostProps> = ({post}) => {
    const dispatch = useAppDispatch()
    const {openConfirm} = UseConfirm()
    const {bind: header} = useInput(post?.title || '', true)
    const {bind: author} = useInput(post?.author || '', true)
    const {bind: article} = useInput(post?.text || '', true)
    const setDisable = !(header.value && author.value && article.value)
    const inputTouched = !(post?.title !== header.value || post?.author !== author.value || post?.text !== article.value)
    const confirmSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const isConfirmed = await openConfirm('Сохранить пост?')
        if (isConfirmed) {
            const editingPost: IPost = {
                id: post?.id || '',
                title: header.value,
                author: author.value,
                text: article.value,
                date: new Date()
            }
            if (post?.id) {
                dispatch(setUpdatePost(editingPost))
            } else {
                dispatch(addNewPost(editingPost))
            }
        }
    }

    const confirmCancelEditMode = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const isConfirmed = await openConfirm()
        if (isConfirmed) {
            dispatch(setNewPostMode())
        }
    }

    return (
        <form className={styles.form} onSubmit={confirmSubmit}>
            <div className={styles.head}>
                <label className={styles.label}>
                    <input className={`${styles.input} ${header.error && styles.error}`}
                           placeholder={'Заголовок'} type="text"
                           maxLength={50} {...header}/>
                    {header.error && <span className={styles.errorMessage}>{header.error}</span>}
                </label>
                <Button buttonName={'Отмена'} onClick={confirmCancelEditMode}/>
                <Button buttonName={'Сохранить'} type={'submit'} disabled={inputTouched || setDisable}/>
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
