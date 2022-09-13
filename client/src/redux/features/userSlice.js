import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'
import axios from 'axios'


const user = JSON.parse(localStorage.getItem('user'))

// get username from the data base
export const signin = createAsyncThunk('users/signin', async (userData,thunkAPI) => {
    try {
        const {data} = await axios.post('/api/users/signin',userData)
        localStorage.setItem('user',JSON.stringify(data))
        return data
    } catch (err) {
        // to catch the error message from the backend
       const message = err.response && err.response.data.message ?
                err.response.data.message :
                err.response
                // to make the value in the slice rejected instead of fullfiled
        return thunkAPI.rejectWithValue(message)
    }
})

export const register = createAsyncThunk('users/register', async (userData,thunkAPI) => {
    try {
        const {data} = await axios.post('/api/users/register',userData)
        if (data){
        localStorage.setItem('user',JSON.stringify(data))
        return data
        }
    } catch (err) {
       let errMsg = err.response && err.response.data.message ?
       err.response.data.message :
       err.response
        return thunkAPI.rejectWithValue(errMsg)
    }
})

export const getUser =createAsyncThunk('auth/getUser',async(userId,thunkAPI)=>{
    try {
        const {data} = await axios.get(`/api/users/${userId}`)
        if (data){
        localStorage.setItem('user',JSON.stringify(data))
        return data
        }
    } catch (err) {
       let errMsg = err.response && err.response.data.message ?
       err.response.data.message :
       err.response
        return thunkAPI.rejectWithValue(errMsg)
    }
})

export const logout = createAsyncThunk('auth/logout',()=>{
    localStorage.removeItem('userAddress')
    localStorage.removeItem('cart')
    localStorage.removeItem('user');
   
})

const authSlice = createSlice({
        name: 'auth',
        initialState: {
            user: null,
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
        extraReducers: {
            [signin.pending]: (state, {
                payload
            }) => {
                state.isLoading = true;
            },
            [signin.fulfilled]: (state, {
                    payload
                }) => {
                    state.isLoading =false;
                    state.isSuccess=true;
                    state.isError = false
                    state.user = payload
            },
            [signin.rejected]: (state, {
                    payload
                }) => {
                    console.log(payload)
                    state.isLoading = false
                    state.isError = true
                    state.message =payload
                    state.user =null
            },
            [register.pending]: (state, {
                payload
            }) => {
                state.isLoading = true;
            },
            [register.fulfilled]: (state, {
                    payload
                }) => {
                    state.isLoading =false;
                    state.isSuccess=true;
                    state.user = payload
              
            },
            [register.rejected]: (state, {
                    payload
                }) => {
                    state.isLoading = false
                    state.isError = true
                    state.message =payload
                    state.user =null
            },
            [getUser.pending]: (state, {
                payload
            }) => {
                state.isLoading = true;
            },
            [getUser.fulfilled]: (state, {
                    payload
                }) => {
                    state.isLoading =false;
                    state.isSuccess=true;
                    state.user = payload
              
            },
            [getUser.rejected]: (state, {
                    payload
                }) => {
                    state.isLoading = false
                    state.isError = true
                    state.message =payload
                    state.user =null
            },
            [logout.fulfilled]:(state,{payload})=>{
                state.user=null;
            },
        },
    }

)

export const {reset} =authSlice.actions
export default authSlice.reducer