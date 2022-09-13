import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('products/getProducts', async (dispatch,getState) => {
    const products = await axios.get('/api/products')
    return products.data
})


const productsSlice = createSlice({
        name: 'products',
        initialState: {
            products: [],
            status: null
        },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = "loading";
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = "success";
            state.products=action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.status = "failed";
        },
    }
}
)

export default productsSlice.reducer