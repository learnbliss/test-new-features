import React from 'react';
import styles from './Post.module.css'
import {IPost} from "../../types";
import {deletePost} from "../../redux/actionCreators";
import {useAppDispatch} from "../../redux/hooks";
import {UseConfirm} from "../../hooks/useConfirm";

interface PostProps extends IPost {}

const Post: React.FC<PostProps> = ({id, title, author, text, date}) => {
    const dateNormalize = new Date(date).toLocaleString();
    const dispatch = useAppDispatch()
    const handleDelete = () => {
        dispatch(deletePost(id))
    }
    const confirmDelete = UseConfirm(handleDelete, 'Удалить этот пост?')
    return (
        <article className={styles.post}>
            <div className={styles.head}>
                <h3>{title}</h3>
                <span className="material-icons">edit</span>
                <span onClick={confirmDelete} className="material-icons">delete</span>
            </div>
            <div className={styles.date}>Дата: {dateNormalize}</div>
            <div className={styles.author}>
                <div className={styles.postId}>id: {id}</div>
                <div>({author})</div>
            </div>
            <div className={styles.text}>{text}</div>
        </article>
    );
};

export default Post;
