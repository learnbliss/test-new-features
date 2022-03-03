import React, {useEffect} from 'react';
import styles from './PostsList.module.css'
import Post from "../Post/Post";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {maxPagesSelector, postsSelector} from "../../redux/selectors/postSelectors";
import {fetchPosts} from "../../redux/actionCreators";
import Loader from '../UI/Loader/Loader';
import {setTodoPage} from "../../redux/reducers/postSlice";
import {useInView} from "react-hook-inview";

interface PostsListProps {

}

const PostsList: React.FC<PostsListProps> = () => {

    const {posts, isLoading, error, page} = useAppSelector(postsSelector)
    const maxPages = useAppSelector(maxPagesSelector)
    const dispatch = useAppDispatch()
    const [refForObserve, isVisible] = useInView({
        threshold: 1,
    })
// test
//     const observer:any = useRef<HTMLElement>();
//     const lastPostRef = useCallback(node => {
//         if (isLoading) return
//         if (observer.current) observer.current.disconnect()
//         observer.current = new IntersectionObserver(entries => {
//             if (entries[0].isIntersecting && posts) {
//                 console.log('visible')
//                 dispatch(setTodoPage(page + 1))
//             }
//         })
//         if (node) observer.current.observe(node)
//         console.log(node)
//     }, [isLoading, posts]);
//     console.log('lastPostRef: ', lastPostRef);
// test
    useEffect(() => {
        dispatch(fetchPosts(page))
    }, [page]);
    useEffect(() => {
        if (isVisible) {
            page < maxPages && dispatch(setTodoPage(page + 1))
        }
    }, [isVisible])

    if (isLoading && posts.length === 0) return <Loader/>

    if (error) return <h1>Ошибка загрузки постов</h1>

    return (
        <>
            <section className={styles.postList}>
                <h1>Articles:</h1>
                {posts.map(post => (
                    <Post key={post.id}
                          id={post.id}
                          title={post.title}
                          author={post.author}
                          text={post.text}
                          date={post.date}/>
                ))}
            </section>
            {isLoading ? <Loader/>
                : <div ref={refForObserve} className={styles.observe}/>
            }
        </>
    );
};

export default PostsList;
