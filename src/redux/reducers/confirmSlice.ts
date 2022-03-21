import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface confirmState {
  isView : boolean;
  message: string
}

const initialState: confirmState = {
  isView: false,
  message: ''
}

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    showConfirm: (state, action: PayloadAction<string>) => {
      state.isView = true;
      state.message = action.payload
    },
    hideConfirm: (state) => {
      state.isView = false;
      state.message = '';
    },
  },
})

export const {showConfirm, hideConfirm} = confirmSlice.actions

export default confirmSlice.reducer
