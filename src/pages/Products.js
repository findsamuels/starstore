import React from 'react'
import ProductFilter from '../components/products/ProductFilter'

import classes from './Products.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { Col, Row } from 'react-bootstrap'
import ProductItems from '../components/products/ProductItems'
import {useRouteMatch}  from 'react-router-dom'
import Wrapper from '../components/UI/Wrapper'



const Products = () => {

    const match = useRouteMatch()
    let myProducts = ''
    const {allProducts, loading,errorMessage,filteredProducts}  = useSelector(state => state.products)

    console.log(allProducts)
    if(loading){
        myProducts = <p>Loading...</p>  
   
    }
    else if(!loading && errorMessage !== null){
        myProducts = <p>{errorMessage}</p>  
    }

   
  
   else if(filteredProducts.length === 0 ){
    myProducts = <ProductItems url='productUrl'   
    products={allProducts.filter(products => products.category !== 'electronics')}/>

    }
    else if(filteredProducts.length !== 0){
      myProducts =   <ProductItems url='productUrl'   
      products={filteredProducts.filter(products => products.category !== 'electronics')}/>
        

    }

 
  

    
    
    


    return (
        <Wrapper>
            <Col md='2'>
            <ProductFilter />
            </Col>
    
            <Col md='8'>   
           {myProducts}
          </Col>
           
        </Wrapper>
    )
}

export default Products
