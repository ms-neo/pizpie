import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const getProduct =createAsyncThunk('products',async (productId) =>{
    const product = await axios.get(`/api/products/${productId}`)
    return product.data
})

const productSlice = createSlice(
    {
        name:'product',
        initialState:{
            product:{},
            status:null
        },
        extraReducers: {
            [getProduct.pending]: (state, action) => {
                state.status = "loading";
            },
            [getProduct.fulfilled]: (state, action) => {
                state.status = "success";
                state.product=action.payload;
            },
            [getProduct.rejected]: (state, action) => {
                state.status = "failed";
            },
        }
    },

)

export default productSlice.reducer