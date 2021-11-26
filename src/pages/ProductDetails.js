import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getSelectedProductSlice } from '../store/selectedProductSlice'
import { useDispatch } from 'react-redux'

import classes from './ProductDetails.module.scss'
import Wrapper from '../components/UI/Wrapper'
import SelectedProduct from '../components/products/SelectedProduct'



const ProductDetails = () => {
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(getSelectedProductSlice(params.productDetails))

        console.log(params)
    },[])
    
    const {selectedProduct,loading,errorMessage} = useSelector(state => state.selectedProduct)
    let selectedProductDiv = ''

    if(loading){
        selectedProductDiv = <p>Loading...</p>  
    }
    else if(!loading && errorMessage !== null){
        selectedProductDiv = <p>{errorMessage}</p>  
    }

    else{
       selectedProductDiv = <Wrapper><SelectedProduct products={selectedProduct}/></Wrapper>
    }

    return selectedProductDiv
    
}

export default ProductDetails
