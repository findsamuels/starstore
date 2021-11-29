import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import Input from '../Form/Input'
import classes from './ProductFilter.module.scss'
import { useForm } from '../../hooks/use-form'

import { useRouteMatch,useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productActions } from '../../store/productSlice'


const ProductFilter = props => {
    const dispatch = useDispatch()
  
    const match = useRouteMatch()
    const history = useHistory()
    
    const { inputChangeHandler:filterTitleHandler ,inputData: filteredInput} = useForm()

    const [productCategory, dispatchCategory] = useState('')
    const [currentLocation, dispatchLocation] = useState('')

    useEffect(() => {
        dispatchLocation(history.location.pathname)
        console.log(history.location.pathname)
    },[])
    useEffect(() =>  {
            dispatch(productActions.filterProduct(filteredInput.toLowerCase()))  
        
       
    },[filteredInput])

    const categoryHandler = (event) => {
        dispatchCategory(event.target.value)
        if(event.target.value === 'products'){
            history.push(`/products`)
        }
        if(productCategory !== ''){
            history.push(`/products/${event.target.value}`)
    
        }
        if(currentLocation !== history.location.pathname){
           
        }
       

    }
    console.log(productCategory)
    return (
        <div className={classes.ProductFilter}>
            <Input onChange={filterTitleHandler} border='grayBorder' elementConfig='text' value={filteredInput} placeholder='Filter by title'/>
                
            
        </div>
    )
}

export default ProductFilter
