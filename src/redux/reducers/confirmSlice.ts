import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface confirmState {
  isView : boolean;
  isPositive: boolean | null;
  message: string;
}

const initialState: confirmState = {
  isView: false,
  isPositive: null,
  message: '',
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
      state.isPositive = null;
      state.message = '';
    },
    toggleConfirm: (state, action: PayloadAction<boolean>) => {
      state.isPositive = action.payload
    }
  },
})

export const {showConfirm, hideConfirm, toggleConfirm} = confirmSlice.actions

export default confirmSlice.reducer
