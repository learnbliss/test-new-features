import {AppDispatch, RootState} from "./store";
import {postSlice} from "./reducers/postSlice";
import {IPost} from "../types";
import axios from "axios";
import {v4 as uuid} from 'uuid';
import {limitSelector, totalCountSelector} from "./selectors/postSelectors";

export const fetchPosts = (page = 1) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const totalCount = totalCountSelector(state)
    const limit = limitSelector(state) | 5
    try {
        dispatch(postSlice.actions.fetchPosts())
        const response = await axios.get<IPost[]>(`http://localhost:3004/posts?_page=${page}&_limit=${limit}&_sort=date&_order=desc`)
        dispatch(postSlice.actions.fetchPostsSuccess(response.data))
        if (!totalCount) {
            dispatch(postSlice.actions.setTotalCount(response.headers['x-total-count']))
        }
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
    try {
        await axios.post('http://localhost:3004/posts', post)
        dispatch(postSlice.actions.clearPosts())
        dispatch(fetchPosts(1))
    } catch (e) {
        console.error(e)
    }
}
