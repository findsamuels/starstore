import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialProductState = {

specificProduct: '',
loading: false,
allProducts: [],
errorMessage: null,
filteredProducts: []
}

export const getProducts = createAsyncThunk(
    'productThunk',
    async (thunkApi) => {
 
        const data = axios.get('https://fakestoreapi.com/products')
        
        .then(res => res.data)

        return data
    }
    
    
)

const productSlice = createSlice({
    name: 'products',
    initialState: initialProductState,

    reducers: {
        filterProduct(state,action){
            state.filteredProducts = state.allProducts.filter(product => product.title.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:{
        [getProducts.pending]: (state) => {
                state.pending = true
        },
        [getProducts.fulfilled]: (state, payload) =>{
            state.loading = false
           
            state.allProducts = payload.payload
        

        },
        [getProducts.rejected]: (state) => {
            state.loading = false;
            state.errorMessage = 'Unable to retrieve data, Please try again or check your connection'
        }
    }
})



export const productActions =  productSlice.actions
export default productSlice.reducer
