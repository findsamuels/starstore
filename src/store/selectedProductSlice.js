



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    selectedProduct: '',
    loading: false,
    errorMessage: null
}


export const getSelectedProductSlice = createAsyncThunk(
    'selectedProductThunk',
    async (thunkAPI) => {
        const data = axios.get(`https://fakestoreapi.com/products/${thunkAPI}`)
        .then(res => res.data)
        return data


    }
)

const selectedProductSlice = createSlice({
    name: 'selectedProduct',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getSelectedProductSlice.pending]: (state) => {
            state.loading = true
        },
        [getSelectedProductSlice.fulfilled]: (state,payload) => {
            state.loading = false
            state.selectedProduct = payload.payload
          
       
         
        },
        [getSelectedProductSlice.rejected]: (state) => {
            state.loading = false
            state.errorMessage = 'Selected Product not found please try again '
            
        }
    }
})



export const selectedProductAction = selectedProductSlice.actions
export default selectedProductSlice.reducer