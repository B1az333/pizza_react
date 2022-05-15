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
            const key = `${action.payload.id}_${action.payload.type}_${action.payload.size}`;
            let extraPrice = 0;

            extraPrice += action.payload.type * 20;
            extraPrice += action.payload.size === 30 ? 50 : action.payload.size === 40 ? 100 : 0;

            if(!state.items[key]) {
                state.items[key] = action.payload;
                state.items[key].count = 0;
                state.items[key].price = action.payload.price + extraPrice;
            }

            state.items[key].count += 1;
            state.totalCount += 1;
            state.totalPrice += state.items[key].price;
        },
        clearCart() {
            return {...initialState}
        },
        decrementCartPizza(state, action) {
            const key = `${action.payload.id}_${action.payload.type}_${action.payload.size}`;

            state.totalPrice -= state.items[key].price;
            state.totalCount -= 1;

            if(state.items[key].count - 1 !== 0){
                state.items[key].count -= 1;
            }
            else {
                delete state.items[key];
            }
        },
        incrementCartPizza(state, action) {
            const key = `${action.payload.id}_${action.payload.type}_${action.payload.size}`;
            state.items[key].count += 1;

            state.totalPrice += state.items[key].price;
            state.totalCount += 1;
        },
        removeCartPizza(state, action) {
            const key = `${action.payload.id}_${action.payload.type}_${action.payload.size}`;

            state.totalPrice -= state.items[key].price*state.items[key].count;
            state.totalCount -= state.items[key].count;

            delete state.items[key];
        },
    },
});

export const { setTotalPrice, setTotalCount, addPizzaCart, clearCart, decrementCartPizza, incrementCartPizza, removeCartPizza } = cartSlice.actions;

export default cartSlice.reducer;