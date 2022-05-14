import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filters';
import pizzasReducer from './slices/pizzas';
import cartReducer  from './slices/cart'

const store = configureStore({
    reducer: {
      filters: filtersReducer,
      pizzas: pizzasReducer,
      cart: cartReducer
    },
  })

export default store;

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0,
//     },
//     reducers: {
//         incremented: state => {
//             console.log(state.value);
//             state.value += 1;
//             console.log(state.value);
//         },
//         decremented: (state) => {
//             state.value -= 1;
//         },
//         plus: (state) => {
//             state.value -= 1;
//         },
//     },
// });

// console.log('counterSlice:', counterSlice);

// console.log('reducer:', counterSlice.reducer);

// console.log(createSlice);

// export const { incremented, decremented } = counterSlice.actions;

// const store = configureStore({
//     reducer: counterSlice.reducer,
// });

// console.log(incremented(5));

// store.subscribe(() => console.log(store.getState()));

// console.log(store);

// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}


