import React from 'react';
import styles from './Post.module.css'
import {IPost} from "../../types";

interface PostProps extends IPost {}

const Post: React.FC<PostProps> = ({id, title, author, text, date}) => {
    const dateNormalize = new Date(date).toLocaleString();
    return (
        <article className={styles.post}>
            <div>
                <h3>{title}</h3>
                <div className={styles.date}>Дата: {dateNormalize}</div>
            </div>
            <div className={styles.head}>
                <div className={styles.headId}>id: {id}</div>
                <div>({author})</div>
            </div>
            <div className={styles.text}>{text}</div>
        </article>
    );
};

export default Post;
