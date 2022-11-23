import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

let user = ()=>{
  return  JSON.parse(localStorage.getItem('user'))
}

export const addCreditCard = createAsyncThunk('payment/addCreditCard', async (cardData,thunkAPI)=>{
    try {
        const {data} =await axios.post('/api/payment-stripe/my-card',cardData,{
            headers:{Authorization :`${user().token}`}
        })
        return data
    } catch (err) {
      let errMsg = err.response && err.response.data.message ?
      err.response.data.message :
      err.response
       return thunkAPI.rejectWithValue(errMsg)
    }

   })

   export const getCreditCards = createAsyncThunk('payment/getCreditCards', async (thunkAPI)=>{
  
    try {
        const {data} =await axios.get('/api/payment-stripe',{
            headers:{Authorization :`${user().token}`}
        })
        return data
    } catch (err) {
      let errMsg = err.response && err.response.data.message ?
      err.response.data.message :
      err.response
       return thunkAPI.rejectWithValue(errMsg)
    }

   })


const creditCardSlice =createSlice({
    name:'cCard',
    initialState:{
        creditCards:[],
        creditCard:'',
        message:'',
        isError:false,
        isSuccess:false,
        isLoading:false,
     
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
[addCreditCard.pending]:(state,{payload})=>{
    state.isLoading=true;
  },
  [addCreditCard.fulfilled]:(state,{payload})=>{
    state.isLoading=false;
    state.isSuccess=true;
    toast.success("You've successfuly added new card ")

    state.creditCard=payload;
  },
  [addCreditCard.rejected]:(state,{payload})=>{
    state.isLoading=false;
    state.isError=true;
    state.message=payload;
  },
  [getCreditCards.pending]:(state,{payload})=>{
    state.isLoading=true;
  },
  [getCreditCards.fulfilled]:(state,{payload})=>{
    state.isLoading=false;
    state.creditCards=payload;
  },
  [getCreditCards.rejected]:(state,{payload})=>{
    state.isLoading=false;
    state.message=payload;
  },
}
})

export const {reset} =creditCardSlice.actions
export default creditCardSlice.reducer