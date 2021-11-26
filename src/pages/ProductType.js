import React, { useEffect, useState } from 'react'
import classes from './ProductType.module.scss'
import Card from '../components/UI/Card'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useLocation, useRouteMatch, useHistory } from 'react-router-dom'
import { productActions } from '../store/productSlice'
import { Col, Row } from 'react-bootstrap'
import { getProductsByCategies } from '../store/productCategorySlice'
import { useRouter } from '../hooks/use-router'
import ProductFilter from '../components/products/ProductFilter'
import ProductItems from '../components/products/ProductItems'
import Wrapper from '../components/UI/Wrapper'

const ProductType = () => {

    const params = useParams()
    const match = useRouteMatch()
    const {routeHandler: productCategoryRouteHandler} = useRouter()
    const dispatch = useDispatch()
    console.log(params)
    
    useEffect(() => {  
        dispatch(getProductsByCategies(params.productCategory))
    },[dispatch, params])

    const {allProducts, loading,errorMessage,filteredProducts}  = useSelector(state => state.products)
    console.log(match.url)
   
    let showProductType = ''
    

    console.log(allProducts)
    if(loading){
        showProductType = <p>Loading...</p>  
   
    }
    else if(!loading && errorMessage !== null){
        showProductType = <p>{errorMessage}</p>  
    }

    else if(filteredProducts.length === 0 ){
        showProductType = <ProductItems  url='productTypeUrl' products={allProducts.filter(products => products.category == params.productCategory)}/>
    }
    else if(filteredProducts.length !== 0){
        showProductType = <ProductItems  url='productTypeUrl' products={filteredProducts.filter(products => products.category == params.productCategory)}/>
    }

   
        
    
    return (  
        <Wrapper className='productItems'>
        <Col md='2'>
        <ProductFilter  breadCrumbUrl={`Home > Products > ${params.productCategory}`} />
        </Col>
            
            <Col md='8'>
  
            {showProductType}
            </Col>
            
            
        </Wrapper> 
        
    )
}

export default ProductType
