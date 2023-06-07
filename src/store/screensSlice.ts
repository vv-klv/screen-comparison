import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    firstScreen: TScreen
    secondScreen: TScreen
}

const screensSlice = createSlice({
    name: 'screens',
    initialState: {
        firstScreen: [27, 16, 9],
        secondScreen: [24, 16, 9]
    } as IState,
    reducers: {
        setFirstScreen(state, action: PayloadAction<TScreen> ) {
            state.firstScreen = action.payload
        },
        setSecondScreen(state, action: PayloadAction<TScreen> ) {
            state.secondScreen = action.payload
        }
    }
})

export const { setFirstScreen, setSecondScreen } = screensSlice.actions

export default screensSlice.reducer