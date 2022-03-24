import {AppDispatch, RootState} from "./store";
import {postSlice, setNewPostMode, setNextPage} from "./reducers/postSlice";
import {IPost} from "../types";
import axios from "axios";
import {v4 as uuid} from 'uuid';
import {limitSelector, pageSelector, searchSelector} from "./selectors/postSelectors";
import {capitalizeFirstLetter} from "../utils";

export const fetchPosts = (page = 1) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const limit = limitSelector(state) || 5
    const search = searchSelector(state)
    try {
        dispatch(postSlice.actions.fetchPosts())
        const response = await axios.get<IPost[]>(`http://localhost:3004/posts?_page=${page}&_limit=${limit}&_sort=date&_order=desc&q=${search}`)
        dispatch(postSlice.actions.setTotalCount(response.headers['x-total-count']))
        dispatch(postSlice.actions.fetchPostsSuccess(response.data))
    } catch (e) {
        dispatch(postSlice.actions.fetchPostsError(e.message))
    }
}

// interface fetchPostsArguments {
//     page: number,
//     limit: number
// }
//
// export const fetchPosts = createAsyncThunk(
//     'post/fetch',
//     async ({page = 1, limit = 5}: fetchPostsArguments, thunkAPI) => {
//         try {
//             const response = await axios.get<IPost>(`http://localhost:3004/posts?_page=${page}&_limit=${limit}`)
//             return response.data
//         } catch (e) {
//             return thunkAPI.rejectWithValue('Error loading articles')
//         }
//     }
// )
// export const fetchTotalCount = createAsyncThunk(
//     'totalCount/fetch',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<number>('http://localhost:3004/posts?_limit=1')
//             return response.headers
//         } catch (e) {
//             return thunkAPI.rejectWithValue('Error loading totalCount')
//         }
//     }
// )

//после добавление нового поста, очищаем массив постов и загружаем заново с 1 страницы
export const addNewPost = (post: IPost) => async (dispatch: AppDispatch) => {
    post.id = uuid();
    post.text = capitalizeFirstLetter(post.text)
    post.author = capitalizeFirstLetter(post.author)
    post.title = capitalizeFirstLetter(post.title)
    try {
        await axios.post('http://localhost:3004/posts', post)
        dispatch(postSlice.actions.clearPosts())
        dispatch(fetchPosts(1))
        dispatch(setNewPostMode())
    } catch (e) {
        console.error(e)
    }
}

export const deletePost = (id: string) => async (dispatch: AppDispatch) => {
    try {
        await axios.delete<IPost[]>(`http://localhost:3004/posts/${id}`);
        dispatch(postSlice.actions.clearPosts())
        dispatch(fetchPosts(1))
    } catch (e) {
        dispatch(postSlice.actions.fetchPostsError(e.message))
    }
}

export const getNextPage = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const page = pageSelector(state)
    const newPage = page + 1
    dispatch(setNextPage(newPage))
    dispatch(fetchPosts(newPage))
}

export const setUpdatePost = (post: IPost) => async (dispatch: AppDispatch) => {
    post.text = capitalizeFirstLetter(post.text)
    post.author = capitalizeFirstLetter(post.author)
    post.title = capitalizeFirstLetter(post.title)
    try {
        await axios.put(`http://localhost:3004/posts/${post.id}`, post)
        dispatch(postSlice.actions.clearPosts())
        dispatch(fetchPosts(1))
        dispatch(setNewPostMode())
    } catch (e) {
        dispatch(postSlice.actions.fetchPostsError(e.message))
    }
}

export const fetchWithSearch = () => async (dispatch: AppDispatch) => {
    dispatch(postSlice.actions.clearPosts())
    dispatch(fetchPosts(1))
}
