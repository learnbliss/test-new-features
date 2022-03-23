import React, {useEffect, useRef} from 'react';
import styles from './PostsList.module.css'
import Post from "../Post/Post";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {maxPagesSelector, postsSelector, searchSelector} from "../../redux/selectors/postSelectors";
import {fetchPosts, getNextPage} from "../../redux/actionCreators";
import Loader from '../UI/Loader/Loader';
import {confirmSelector} from "../../redux/selectors/confirmSelectors";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import useOnScreen from "../../hooks/useOnScreen";

interface PostsListProps {

}

const PostsList: React.FC<PostsListProps> = () => {
    const search = useAppSelector(searchSelector)
    const {posts, isLoading, error, page} = useAppSelector(postsSelector)
    const {isView} = useAppSelector(confirmSelector)
    const maxPages = useAppSelector(maxPagesSelector)
    const dispatch = useAppDispatch()
    const elementRef = useRef<HTMLDivElement>(null)
    const isOnScreen = useOnScreen(elementRef, {
        threshold: 1
    });

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);
    useEffect(() => {
        if (isOnScreen && page < maxPages) {
            dispatch(getNextPage())
        }
    }, [isOnScreen])

    if (isLoading && posts.length === 0) return <Loader/>
    if (error) return <h1>Ошибка загрузки постов</h1>

    return (
        <>
            <section className={styles.postList}>
                {posts.length === 0 ?
                    <h3>Посты отсутствуют на сервере</h3> :
                    <h1>{search? 'Рузультаты поиска' : 'Посты'}:</h1>
                }
                {posts.map((post, i) => (
                    <div key={post.id}>
                        <Post id={post.id}
                              title={post.title}
                              author={post.author}
                              text={post.text}
                              date={post.date}/>
                        {i === posts.length - 1 &&
                            <div ref={elementRef} className={styles.observe}/>}
                    </div>
                ))}
            </section>
            {isView && <ConfirmModal/>}
        </>
    );
};
export default PostsList;
