import React from 'react'
import ProductFilter from '../components/products/ProductFilter'

import classes from './Products.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { Col, Row } from 'react-bootstrap'
import ProductItems from '../components/products/ProductItems'
import {useRouteMatch}  from 'react-router-dom'
import Wrapper from '../components/UI/Wrapper'
import PageHeader from '../components/PageHeader'



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
    myProducts = <ProductItems boxShadow='none' url='productUrl'   
    products={allProducts.filter(products => products.category !== 'electronics')}/>

    }
    else if(filteredProducts.length !== 0){
      myProducts =   <ProductItems boxShadow='none' url='productUrl'   
      products={filteredProducts.filter(products => products.category !== 'electronics')}/>
        

    }

 
  

    
    
    


    return (
        <Wrapper>
            <PageHeader title='Star store products' description={`This is where you will find all of our amazing clothing, we make sure to cover everyone's needs so feel free to find what you need.`}/>
            <Row className='centeredRow'>
            
            <ProductFilter /> 
           {myProducts}
          
            </Row>
            
           
        </Wrapper>
    )
}

export default Products
