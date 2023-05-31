import { configureStore } from '@reduxjs/toolkit';
import rectanglesReducer from './rectanglesSlice';

export default configureStore({
    reducer: {
        rectangles: rectanglesReducer,
    }
})