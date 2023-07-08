import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    firstScreen: number[]
    secondScreen: number[]
    firstScreenRes: number[]
    secondScreenRes: number[]
}

const screensSlice = createSlice({
    name: 'screens',
    initialState: {
        firstScreen: [27, 16, 9],
        secondScreen: [24, 16, 9],
        firstScreenRes: [1920, 1080],
        secondScreenRes: [1920, 1080]
    } as IState,
    reducers: {
        setFirstScreenState(state, action: PayloadAction<number[]> ) {
            state.firstScreen = action.payload
        },
        setSecondScreenState(state, action: PayloadAction<number[]> ) {
            state.secondScreen = action.payload
        },
        setFirstScreenResState(state, action: PayloadAction<number[]> ) {
            state.firstScreenRes = action.payload
        },
        setSecondScreenResState(state, action: PayloadAction<number[]> ) {
            state.secondScreenRes = action.payload
        }
    }
})

export const {
    setFirstScreenState,
    setSecondScreenState ,
    setFirstScreenResState,
    setSecondScreenResState
} = screensSlice.actions

export default screensSlice.reducer