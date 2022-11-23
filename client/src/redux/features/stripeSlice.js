import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let user = ()=>{
  return  JSON.parse(localStorage.getItem('user'))
}

export const getStripeSecret= createAsyncThunk('payment/getStripe', async (amount,thunkAPI)=>{
  console.log('stripe')
    try {
        const {data} =await axios.post('/api/payment-stripe',amount,{
            headers:{Authorization :`${user().token}`}
        })
        return data
    } catch (err) {
      let errMsg = err.response && err.response.data.message ?
      err.response.data.message :
      err.response
       return thunkAPI.rejectWithValue(errMsg.data)
    }
   })

  
   export const getStripeKey= createAsyncThunk('payment/getStripeKey', async (amount,thunkAPI)=>{
    console.log('stripe2')
    try {
        const {data} =await axios.get('/api/payment-stripe/key',{
            headers:{Authorization :`${user().token}`}
        })
        return data
    } catch (err) {
      let errMsg = err.response && err.response.data.message ?
      err.response.data.message :
      err.response
       return thunkAPI.rejectWithValue(errMsg.data)
    }
   })

const stripSlice =createSlice({
    name:'stripe',
    initialState:{
        stripeSecret:'',
        stripePublicKey:'',
        isError:false,
        isSuccess:false,
        isLoading:false,
        message:'',
    },
    reducers:{
      reset:(state)=>{
      state.stripeSecret=''
      state.isError=false
      state.isSuccess=false
      state.isLoading=false
      state.message=''
    },
  },
  extraReducers:{
[getStripeSecret.pending]:(state,{payload})=>{
    state.isLoading=true;
  },
  [getStripeSecret.fulfilled]:(state,{payload})=>{
    state.isLoading=false;
    state.isSuccess=true;
    state.stripeSecret=payload;
  },
  [getStripeSecret.rejected]:(state,{payload})=>{
    state.isLoading=false;
    state.isError=true;
    state.message=payload;
  },
  [getStripeKey.pending]:(state,{payload})=>{
    state.isLoading=true;
  },
  [getStripeKey.fulfilled]:(state,{payload})=>{
    state.isLoading=false;
    state.isSuccess=true;
    state.stripePublicKey=payload;
  },
  [getStripeKey.rejected]:(state,{payload})=>{
    state.isLoading=false;
    state.isError=true;
    state.message=payload;
  },
}
})

export const {reset} =stripSlice.actions
export default stripSlice.reducer