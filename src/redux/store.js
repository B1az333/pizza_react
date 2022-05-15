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