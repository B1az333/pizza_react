import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const END_POINT = 'http://localhost:3004';

const initialState = {
    pizzas: [],
    isLoaded: false
};

const fetchPizzas = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${END_POINT}/pizzas`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пиццы")
        }
    }
)

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.pizzas = action.payload
        },
    },
    extraReducers: {
        [fetchPizzas.fulfilled.type]: (state, action) => {
            state.isLoaded = false;
            state.error = ''
            state.pizzas = action.payload;
        },
        [fetchPizzas.pending.type]: (state) => {
            state.isLoaded = true;
        },
        [fetchPizzas.rejected.type]: (state,  action) => {
            state.isLoaded = false;
            state.error = action.payload
        },
    }
});

export { fetchPizzas };
export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;