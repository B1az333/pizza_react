import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 0,
    sortBy: 'popular',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortBy(state, action) {
            return {
                ...state,
                sortBy: action.payload
            }
        },

        // todoAdded(state, action) {
        //     state.push(action.payload);
        // },
        // todoToggled(state, action) {
        //     const todo = state.find((todo) => todo.id === action.payload);
        //     todo.completed = !todo.completed;
        // },
        // todosLoading(state, action) {
        //     return {
        //         ...state,
        //         status: 'loading',
        //     };
        // },
    },
});



export const { setSortBy } = filtersSlice.actions;

export default filtersSlice.reducer;
