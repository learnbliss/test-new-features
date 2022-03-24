import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import postSlice from "./reducers/postSlice";
import ConfirmSlice from "./reducers/confirmSlice";
import UISlice from "./reducers/UISlice";

const rootReducer = combineReducers({
    post: postSlice,
    confirm: ConfirmSlice,
    UI: UISlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
