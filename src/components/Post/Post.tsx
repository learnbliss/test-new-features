import React, {useMemo} from 'react';
import styles from './Post.module.css'
import {IPost} from "../../types";
import {deletePost} from "../../redux/actionCreators";
import {useAppDispatch} from "../../redux/hooks";
import {UseConfirm} from "../../hooks/useConfirm";
import {updatePost} from "../../redux/reducers/postSlice";

interface PostProps extends IPost {
}

const Post: React.FC<PostProps> = ({id, title, author, text, date}) => {
    const dateNormalize = useMemo(
        () =>
            new Date(date).toLocaleString(),
        [date]
    );
    const dispatch = useAppDispatch()
    const {openConfirm} = UseConfirm()
    const confirmHandleDelete = async () => {
        const isConfirmed = await openConfirm('Удалить пост?')
        if (isConfirmed) {
            dispatch(deletePost(id))
        }
    }
    const confirmHandleEdit = async () => {
      const isConfirmed = await openConfirm('Редактировать пост?')
        if (isConfirmed) {
            dispatch(updatePost(id))
        }
    }
    return (
        <article className={styles.post}>
            <div className={styles.head}>
                <h3>{title}</h3>
                <span onClick={confirmHandleEdit} className="material-icons">edit</span>
                <span onClick={confirmHandleDelete} className="material-icons">delete</span>
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
