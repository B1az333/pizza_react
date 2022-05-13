import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pizzas: [],
    isLoaded: false
};

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action) {
            return {
                ...state,
                pizzas: action.payload,
            }
        },
    },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;