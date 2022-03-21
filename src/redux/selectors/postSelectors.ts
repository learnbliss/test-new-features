import {RootState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

export const postsSelector = (state: RootState) => state.post;
export const limitSelector = (state: RootState) => state.post.limit
const totalCountSelector = (state: RootState) => state.post.totalCount
export const maxPagesSelector = createSelector(
    limitSelector,
    totalCountSelector,
    (limit, totalCount) => {
       return Math.ceil(totalCount / limit)
    }
)
export const pageSelector = (state: RootState) => state.post.page
export const editPostIdSelector = (state: RootState) => state.post.editPostId
export const postIdSelector = (id: string | null) => (state: RootState) => state.post.posts.find(post => id && post.id === id)
