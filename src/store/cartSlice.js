import { createSlice } from "@reduxjs/toolkit"


const initialCartState = {
amountInCart: 0,
cartItems: [],
totalPrice: 0,
disabled: false

}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addProduct(state,action){
           
  

            let currentProductIndex = state.cartItems.findIndex(product => product.id === action.payload.id)
const updatedCart = state.cartItems[currentProductIndex]
            if(updatedCart){
           updatedCart.totalItemPrice = action.payload.totalItemPrice
           updatedCart.quantity = updatedCart.quantity + action.payload.quantity
           state.totalPrice = state.totalPrice + action.payload.price
            }
            else{
                state.cartItems.unshift(action.payload)
                state.amountInCart = state.amountInCart + 1
                state.totalPrice = state.totalPrice + action.payload.totalItemPrice
                state.disabled = true
            }

           
        },
        removeProduct(state,action){
            let currentProductIndex = state.cartItems.findIndex(product => product.id === action.payload.id)
            const updatedCart = state.cartItems[currentProductIndex]
            
           
           
         if(updatedCart.quantity > 1){
                updatedCart.quantity = updatedCart.quantity - action.payload.quantity
                updatedCart.totalItemPrice = action.payload.totalItemPrice 
                state.totalPrice = state.totalPrice - action.payload.price
                console.log(updatedCart.quantity)
            }
            else{
                state.totalPrice = state.totalPrice - updatedCart.totalItemPrice
                state.disabled = false
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                state.amountInCart = state.amountInCart < 1
                
            }
           
                
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer