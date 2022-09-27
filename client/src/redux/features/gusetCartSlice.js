import {
    createSlice
} from "@reduxjs/toolkit";

const guestCart = JSON.parse(localStorage.getItem('guestCartItems'))
const guestCartSlice = createSlice({
    name: 'guestCart',
    initialState: {
        guestCartItems:guestCart?guestCart: [],
        isLoading: true,
        isSuccess: false,
        isError:false,
        quantityNum: 0,
        cartTotalAmount: 0,
        message:''
    },
    reducers: {
        resetGuestCart:(state)=>{
            state.guestCartItems= []
            state.isLoading= true
            state.isSuccess= false
            state.isError=false
            state.quantityNum= 0
            state.cartTotalAmount= 0
            state.message=''  
        },
        addToCart: (state, {  payload  }) => {
            console.log(payload, 'add to cart')
            let newItem = payload
            console.log(state.guestCartItems.length,'dddd')
            if (state.guestCartItems.length !== 0){
            let findItem = state.guestCartItems.findIndex(item => item.product._id === newItem.product._id)
            
            console.log(findItem, 'findItem')
            if (findItem !== -1) {
                state.guestCartItems.map(item => {
                    // check the elemnt we need to mutate its qty aka qty
                    let checkQty = item.qty + newItem.qty
                    if (item.product._id === newItem.product._id)
                        // we now only mutate the qty of specific product

                        if (checkQty > 8) {
                            state.guestCartItems[findItem] = {
                                ...state.guestCartItems[findItem], // we spread or make copy of the object
                                qty: 8
                            } //tehn change it qty  
                        } else {
                            state.guestCartItems[findItem] = {
                                ...state.guestCartItems[findItem], // we spread or make copy of the object
                                qty: item.qty + newItem.qty
                            } //tehn change it qty
                        } 
                })
                // toast.info(`${newItem.qty} Item has been Added to the guestCartItems`);
                
            } else {
                state.guestCartItems.push(newItem)
                // toast.success("Item has been Added sucessfuly");
            }
        } else{
            state.guestCartItems.push(payload)
        }
            localStorage.setItem('guestCartItems', JSON.stringify(state.guestCartItems));
            
        },
        increaseQuantity: (state, {
            payload
        }) => {
            let newItem = payload
            let findItem = state.guestCartItems.findIndex(item => item.product._id === newItem.product._id)
            console.log('inc')
            if (findItem !== -1) {
                state.guestCartItems.map(item => {
                    // check the elemnt we need to mutate its qty aka qty
                    if (item.product._id === newItem.product._id)
                        // we now only mutate the qty of specific product
                        state.guestCartItems[findItem] = {
                            ...state.guestCartItems[findItem], // we spread or make copy of the object
                            qty: item.qty + 1
                        } //tehn change it qty
                })
            }
            localStorage.setItem('guestCartItems', JSON.stringify(state.guestCartItems));
        },
        decreaseQuantity: (state, {
            payload
        }) => {
            let newItem = payload
            let findItem = state.guestCartItems.findIndex(item => item.product._id === newItem.product._id)
            console.log('dec')
            if (findItem !== -1) {
                state.guestCartItems.map(item => {
                    // check the elemnt we need to mutate its qty aka qty
                    if (item.product._id === newItem.product._id)
                        // we now only mutate the qty of specific product
                        state.guestCartItems[findItem] = {
                            ...state.guestCartItems[findItem], // we spread or make copy of the object
                            qty: item.qty - 1
                        } //tehn change it qty
                })
            }
            localStorage.setItem('guestCartItems', JSON.stringify(state.guestCartItems));
        },
        getTotals: (state, { payload }) => {
            let totalQty = []
            let totalPrice = []
            //push the quantity and the prices into to arrays
            // multiply the element with the same index in each others from the two array qty * the price of the product
            let calcTotal = (a, b) => {
                return a.map((e, index) => e * b[index])
            }
            // calculat the total amount of the cart
            if (calcTotal(totalQty, totalPrice) !== []) {
                state.cartTotalAmount = calcTotal(totalQty, totalPrice).reduce((a, b) => a + b, 0)
            }
            localStorage.setItem('guestCartItems', JSON.stringify(state.guestCartItems));
            return state
        },
        removeItemFromCart: (state, { payload }) => {

            state.guestCartItems.map(cartItem => {
                // loop to find the item and check if it's the same item that dispatched
                if (cartItem.product._id === payload.product._id) {
                    // if true the we will filter the item 
                    let nextCart = state.guestCartItems.filter((item) => item.product !== cartItem.product)
                    state.guestCartItems = nextCart
                }
            })
            localStorage.setItem('guestCartItems', JSON.stringify(state.guestCartItems));
            return state
        },
        // clearCart: (state, action) => {
        //     state.guestCartItems = [];
        //     localStorage.setItem('guestCartItems', JSON.stringify(state.guestCartItems));
        // }
    },
})

export const {
    resetCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getTotals,
    removeItemFromCart,
} = guestCartSlice.actions

export default guestCartSlice.reducer