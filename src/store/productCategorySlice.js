import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialProductCategory = {
    productCategory: [],
    loading: false,
    errorMessage: null
}


export const getProductsByCategies = createAsyncThunk(
    'productCategoryThunk',
    async (thunkAPI) => {

        const data = axios.get(`https://fakestoreapi.com/products/category/${thunkAPI}`)
        .then(res => res.data)
        return data


    }
)

const productCategorySlice = createSlice({
    name: 'productCategory',
    initialState: initialProductCategory,
    reducers: {

    },
    extraReducers: {
        [getProductsByCategies.pending]: (state) => {
            state.loading = true
        },
        [getProductsByCategies.fulfilled]: (state,payload) => {
            state.loading = false
            state.productCategory = payload.payload
       
         
        },
        [getProductsByCategies.rejected]: (state) => {
            state.loading = false
            state.errorMessage = 'Unable to retrieve products please check your connection or try again '
            
        }
    }
})



export const productCategoryActions = productCategorySlice.actions
export default productCategorySlice.reducer