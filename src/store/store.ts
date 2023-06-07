import { configureStore } from '@reduxjs/toolkit';
import screensReducer from './screensSlice';

const store =  configureStore({
    reducer: {
        screens: screensReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch