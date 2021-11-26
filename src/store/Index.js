import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice'
import productCategoryReducer from './productCategorySlice'
import selectedProductReducer from './selectedProductSlice'
import cartReducer from './cartSlice'
import uiReducer from './uiSlice'

const store = configureStore({

reducer:{
products: productReducer,
productCategory: productCategoryReducer,
selectedProduct: selectedProductReducer,
cart: cartReducer,
ui: uiReducer
}

})

export default store