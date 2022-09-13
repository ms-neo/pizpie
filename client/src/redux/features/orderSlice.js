import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'
import axios from 'axios'

let user = ()=>{
    return  JSON.parse(localStorage.getItem('user'))
  }

export const createOrder = createAsyncThunk('/order/createorder', async (orderItems,thunkAPI) => {
try {
    const { data} = await axios.post('/api/orders', orderItems,
    {
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


export const getOrders = createAsyncThunk('/order/getOrders', async (thunkAPI) => {
try {
    const { data} = await axios.get('/api/orders',
    {
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

export const getOrder = createAsyncThunk('/order/getOrder', async (orderId,thunkAPI) => {
    try {
        const { data} = await axios.get(`/api/orders/${orderId}`,
        {
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


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        order:'',
        // isError: false,
        // isSuccess: false,
        isLoading: false,
        status:null,
        message: '',
    },
    reducers:{
        reset:(state)=>{
            state.orders=[]
            state.order=''
            state.isError= false;
            state.isSuccess= false;
            state.isLoading= false;
            state.message= '';
        }
    },
    extraReducers: {
        [createOrder.pending]: (state, { payload }) => {
            state.isLoading=true;
        },
        [createOrder.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.order=payload
        },
        [createOrder.rejected]:(state,{payload}) =>{
            state.isLoading=false;
            state.isError=true;
            state.message=payload
        },
        [getOrders.pending]: (state, { payload }) => {
            state.isLoading=true;
        },
        [getOrders.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.orders=payload
        },
        [getOrders.rejected]:(state,{payload}) =>{
            state.isLoading=false;
            state.isError=true;
            state.message=payload
        },
        [getOrder.pending]: (state, { payload }) => {
            state.isLoading=true;
        },
        [getOrder.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.orders=null
            state.order=payload
        },
        [getOrder.rejected]:(state,{payload}) =>{
            state.isLoading=false;
            state.isError=true;
            state.message=payload
        }
    }
})

export const { reset}=orderSlice.actions
export default orderSlice.reducer