import {createSlice} from '@reduxjs/toolkit'

export interface postState {
    isViewBurger: boolean
}

const initialState: postState = {
    isViewBurger: false
}

export const postSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        toggleViewBurger: (state) => {
          state.isViewBurger = !state.isViewBurger
        }
    }
})

export const {toggleViewBurger} = postSlice.actions

export default postSlice.reducer
