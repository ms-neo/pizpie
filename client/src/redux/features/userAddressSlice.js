import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let user = ()=>{
    return  JSON.parse(localStorage.getItem('user'))
  }

export const saveShippingAddress =createAsyncThunk('userAddress/postData',async (addressUser,thunkAPI)=>{
    console.log(user(),'auth')
    try {
    const {data} = await axios.post('/api/shipping-address',addressUser,{
            headers:{
            Authorization:`${user().token}`
            }
    })
    // store it to localhost
    localStorage.setItem("userAddress",JSON.stringify(data))
    return data
    } catch (err) {
        const message = err.response && err.response.data.message ?
        err.response.data.message :
        err.response
        // to make the value in the slice rejected instead of fullfiled
return thunkAPI.rejectWithValue(message)
    }

})

export const getUserAddress = createAsyncThunk('userAddress/getAddress',async(addressId,thunkAPI)=>{
    try {    

        const {data} =await axios.get(`/api/shipping-address/mine/${addressId}`,
            {
               headers:{ Authorization:`${user().token}`}
            }
        )
        localStorage.setItem("userAddress",JSON.stringify(data))
        return data
    } catch (err) {
        let message = err.response && err.response.data.message ?
        err.response.data.message :
        err.response
        // to make the value in the slice rejected instead of fullfiled
return thunkAPI.rejectWithValue(message)
    }

})

const userAddressSlice =createSlice({
    name:"userAddress",
    initialState:{
        userAddress:{},
        isError:false,
        isSuccess:false,
        isLoading:false,
        message:'',
    },
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
          },
    },
    extraReducers:{
        [saveShippingAddress.pending]:(state,{payload})=>{
            state.isLoading=true;
        },
        [saveShippingAddress.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.userAddress=payload
        },
        [saveShippingAddress.rejected]:(state,{payload})=>{
            state.isLoading=true;
            state.isError=true;
            state.message=payload
        },
        [getUserAddress.pending]:(state,{payload})=>{
            state.isLoading=true;
        },
        [getUserAddress.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.userAddress=payload
        },
        [getUserAddress.rejected]:(state,{payload})=>{
            state.isLoading=false;
            state.isError=true;
            state.message=payload
        },
        
    }
   
})

export const { reset } = userAddressSlice.actions
export default userAddressSlice.reducer