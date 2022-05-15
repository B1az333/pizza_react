import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: null,
    sortBy: { name: 'популярности', type: 'popular' }
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortBy(state, action) {
            state.sortBy = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
    },
});

export const { setSortBy, setCategory } = filtersSlice.actions;

export default filtersSlice.reducer;
