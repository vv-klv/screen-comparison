import { createSlice } from '@reduxjs/toolkit';

const rectanglesSlice = createSlice({
    name: 'rectangles',
    initialState: {
        rectangles: [[1, 1], [1, 1], [1, 1]],
    },
    reducers: {
        setRectanglesSizes(state, action) {
            state.rectangles = action.payload.sizes;
        }
    }
})

export const {reac} = rectanglesSlice.actions;

export default rectanglesSlice.reducer