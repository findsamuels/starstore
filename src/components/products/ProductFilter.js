import React, { useEffect } from 'react'
import Form from '../Form/Form'
import Input from '../Form/Input'
import classes from './ProductFilter.module.scss'
import { useForm } from '../../hooks/use-form'

import { useDispatch } from 'react-redux'
import { productActions } from '../../store/productSlice'


const ProductFilter = props => {
    const dispatch = useDispatch()

    const { inputChangeHandler:filterTitleHandler ,inputData: filteredInput} = useForm()
    useEffect(() =>  {
            dispatch(productActions.filterProduct(filteredInput.toLowerCase()))  
        
       
    },[dispatch,filteredInput])

    return (
        <Form className={classes.ProductFilter}>
            <Input onChange={filterTitleHandler} border='grayBorder' elementconfig='text' value={filteredInput} placeholder='Filter by title'/>
                
            
        </Form>
    )
}

export default ProductFilter
