import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WordState {
    history: Array<{ word: string; date: string }>;
}

const initialState: WordState = {
    history: [], 
};

const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        addWordToHistory(state, action: PayloadAction<{ word: string; date: string }>) {
            state.history.push(action.payload);
        },
        clearHistory(state) {
            state.history = []; 
        },
    },
});

export const { addWordToHistory, clearHistory } = wordSlice.actions;
export default wordSlice.reducer;
