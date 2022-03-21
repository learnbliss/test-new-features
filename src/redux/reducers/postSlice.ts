import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IPost} from "../../types";

export interface postState {
    posts: IPost[];
    isLoading: boolean;
    error: string;
    page: number;
    limit: number;
    totalCount: number;
    editMode: boolean;
    editPostId: string | null;
}

const initialState: postState = {
    posts: [],
    isLoading: false,
    error: '',
    page: 1,
    limit: 5,
    totalCount: 0,
    editMode: false,
    editPostId: null
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchPosts: (state) => {
          state.isLoading = true;
        },
        fetchPostsSuccess: (state, action: PayloadAction<IPost[]>) => {
          state.isLoading = false;
          state.posts = [...state.posts, ...action.payload];
          state.error = '';
        },
        fetchPostsError: (state, action: PayloadAction<string>) => {
          state.error = action.payload;
        },
        setTotalCount: (state, action: PayloadAction<string>) => {
            state.totalCount = +action.payload;
        },
        setNextPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setNewPostMode: (state) => {
            state.editMode = !state.editMode;
            state.editPostId = !state.editMode? null : state.editPostId
        },
        clearPosts: (state) => {
            state.posts = [];
            state.page = 1;
            // state.editPostId = null
        },
        updatePost: (state, action: PayloadAction<string>) => {
            state.editMode = true;
            state.editPostId = action.payload
        }
    },
    // extraReducers: {
    //     [fetchPosts.pending.type]: (state) => {
    //         state.isLoading = true
    //     },
    //     [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
    //         state.isLoading = false;
    //         state.posts = [...state.posts, ...action.payload]
    //         state.error = '';
    //     },
    //     [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
    //         state.error = action.payload
    //     },
    // }
})

export const {setNextPage, setNewPostMode, clearPosts, updatePost} = postSlice.actions

export default postSlice.reducer
