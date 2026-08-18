import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cart",
    initialState:{
        items:[ ]
    },
    reducers:{
        addItems: (state,action) => {
            state.items.push(action.payload)   // add items in array
        },
        removeItems:(state,action) => {
            state.items.pop()  // remove items from end of array ..
        },
        clearCart:(state,action) => {
            state.items.length=0 // [] make whole array empty .. lol ...
        }
    }
})
export const {addItems,removeItems ,clearCart} = cartSlice.actions
export default cartSlice.reducer
