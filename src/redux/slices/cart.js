import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setTotalPrice(state, action) {
            state.totalPrice = action.payload
        },
        setTotalCount(state, action) {
            state.totalCount = action.payload
        },
        addPizzaCart(state, action) {
            if(!state.items[action.payload.id]) state.items[action.payload.id] = [];
            state.items[action.payload.id].push(action.payload);
            
            state.totalCount += 1;
            state.totalPrice += action.payload.price;
        },
    },
});

export const { setTotalPrice, setTotalCount, addPizzaCart } = cartSlice.actions;

export default cartSlice.reducer;