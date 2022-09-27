import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

let user = ()=>{
  return  JSON.parse(localStorage.getItem('user'))
}

// post cart to monodb
export const saveCart = createAsyncThunk('cart/saveCart',async (product,thunkAPI)=>{
    try {
        const {data} = await axios.post(`/api/cart`,product,{
            headers:{
                Authorization:`${user().token}`
                }
        })

        localStorage.setItem('cart',JSON.stringify(data))
        return data
    } catch (err) {
        let errMsg = err.response && err.response.data.message ?
        err.response.data.message :
        err.response

         return thunkAPI.rejectWithValue(errMsg)
    }
})

// get cart
export const getCart = createAsyncThunk('cart/getCart',async (userId,thunkAPI)=>{

    try {
        const {data} = await axios.get(`/api/cart/${userId}`,{
            headers:{
                Authorization:`${user().token}`
            }
        })
        console.log(data,'action')
        localStorage.setItem('cart',JSON.stringify(data))
        return data
    } catch (err) {
        let errMsg = err.response && err.response.data.message ?
        err.response.data.message :
        err.response
         return thunkAPI.rejectWithValue(errMsg)
    }
})

//increment quantity
export const incrementItemQty = createAsyncThunk('cart/incQty' ,async (product,thunkAPI)=>{
    try {
        const {data} = await axios.put(`/api/cart/incQuantity`,product ,{
            headers:{
                Authorization:`${user().token}`
            }
        })
        localStorage.setItem('cart',JSON.stringify(data))
        return data
    } catch (err) {
        let errMsg = err.response && err.response.data.message ?
        err.response.data.message :
        err.response
         return thunkAPI.rejectWithValue(errMsg)
    }
}) 

// Decrese quantity
export const decrementItemQty = createAsyncThunk('cart/decQty' ,async (product,thunkAPI)=>{
    try {
        const {data} = await axios.put(`/api/cart/decQuantity`,product ,{
            headers:{
                Authorization:`${user().token}`
            }
        })
        localStorage.setItem('cart',JSON.stringify(data))
        return data
    } catch (err) {
        let errMsg = err.response && err.response.data.message ?
        err.response.data.message :
        err.response
         return thunkAPI.rejectWithValue(errMsg)
    }
}) 


export const removeItemFromCart = createAsyncThunk('cart/reomveItem',async (productId,thunkAPI)=>{
    try {
        const {data} = await axios.delete(`/api/cart/del/${productId}` ,{
            headers:{
                Authorization:`${user().token}`
            }
        })
        localStorage.setItem('cart',JSON.stringify(data))
        return data
    } catch (err) {
        let errMsg = err.response && err.response.data.message ?
        err.response.data.message :
        err.response
         return thunkAPI.rejectWithValue(errMsg)
    }
})

export const clearCart = createAsyncThunk('cart/clearCart',async (cartId,thunkAPI)=>{
    try {
        const {data} = await axios.delete(`/api/cart/${cartId}` ,{
            headers:{
                Authorization:`${user().token}`
            }
        })
        console.log(data)
        localStorage.setItem('cart',JSON.stringify(data))
        return data 
    } catch (err) {
        let errMsg = err.response && err.response.data.message ?
        err.response.data.message :
        err.response
         return thunkAPI.rejectWithValue(errMsg)
    }
})


const cartoSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems:[],
        isLoading: true,
        isSuccess: false,
        isError:false,
        quantityNum: 0,
        cartTotalAmount: 0,
        message:''
    },
    reducers: {
        resetCart:(state)=>{
            state.cartItems= []
            state.isLoading= true
            state.isSuccess= false
            state.isError=false
            state.quantityNum= 0
            state.cartTotalAmount= 0
            state.message=''  
        },
        getTotals: (state, { payload }) => {
        
            if (state.cartItems.products){
state.cartTotalAmount=state.cartItems.products.reduce((a,c)=> a + c.price * c.quantity,0)
            }
            return state
        },
    },
    extraReducers:{
        [saveCart.pending]:(state,{payload})=>{
            state.isLoading=true
        },
        [saveCart.fulfilled]:(state,{payload})=>{
            state.isLoading=false
            state.isSuccess=true
            state.cartItems=payload
        },
        [saveCart.rejected]:(state,{payload})=>{
            state.isLoading=true
            state.message=payload
        },
        [getCart.pending]:(state,{payload})=>{
            state.isLoading=true
        },
        [getCart.fulfilled]:(state,{payload})=>{
            state.isLoading=false
            state.isSuccess=true
            state.cartItems=payload
        },
        [getCart.rejected]:(state,{payload})=>{
            state.isLoading=true
            state.message=payload
        },
        [incrementItemQty.pending]:(state,{payload})=>{
            state.isLoading=true
        },
        [incrementItemQty.fulfilled]:(state,{payload})=>{
            state.isLoading=false
            state.cartItems=payload
        },
        [incrementItemQty.rejected]:(state,{payload})=>{
            state.isLoading=true
            state.message=payload
        },
        [decrementItemQty.pending]:(state,{payload})=>{
            state.isLoading=true
        },
        [decrementItemQty.fulfilled]:(state,{payload})=>{
            state.isLoading=false
            state.cartItems=payload
        },
        [decrementItemQty.rejected]:(state,{payload})=>{
            state.isLoading=true
            state.message=payload
        },
        [removeItemFromCart.pending]:(state,{payload})=>{
            state.isLoading=true
        },
        [removeItemFromCart.fulfilled]:(state,{payload})=>{
            state.isLoading=false
            state.cartItems=payload
        },
        [removeItemFromCart.rejected]:(state,{payload})=>{
            state.isLoading=true
            state.message=payload
        },
        [clearCart.pending]:(state,{payload})=>{
            state.isLoading=true
        },
        [clearCart.fulfilled]:(state,{payload})=>{
            state.isLoading=false
            state.cartItems=payload
        },
        [clearCart.rejected]:(state,{payload})=>{
            state.isLoading=true
            state.message=payload
        }
    }
})

export const {
    resetCart,
    getTotals,
} = cartoSlice.actions

export default cartoSlice.reducer