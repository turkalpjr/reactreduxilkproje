import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    quantity: 5,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState
});


export default cartSlice.reducer;