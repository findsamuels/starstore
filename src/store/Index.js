import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice'
import productCategoryReducer from './productCategorySlice'
import selectedProductReducer from './selectedProductSlice'
import cartReducer from './cartSlice'
import uiReducer from './uiSlice'
import authReducer from './authSlice'


const store = configureStore({

reducer:{
products: productReducer,
productCategory: productCategoryReducer,
selectedProduct: selectedProductReducer,
cart: cartReducer,
ui: uiReducer,
auth: authReducer,
}

})

export default store