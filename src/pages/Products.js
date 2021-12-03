import React from 'react'
import ProductFilter from '../components/products/ProductFilter'

import { useSelector } from 'react-redux'

import {  Row } from 'react-bootstrap'
import ProductItems from '../components/products/ProductItems'
import Wrapper from '../components/UI/Wrapper'
import PageHeader from '../components/PageHeader'
import classes from './Products.module.scss'
import Loading from '../components/UI/Loading'



const Products = () => {

    let myProducts = ''
    const {allProducts, loading,errorMessage,filteredProducts}  = useSelector(state => state.products)
    if(loading){
        myProducts = <Loading/>  
   
    }
    else if(!loading && errorMessage !== null){
        myProducts = <p>{errorMessage}</p>  
    }

   
  
   else if(filteredProducts.length === 0 ){
    myProducts = <ProductItems className={classes.myproducts} boxShadow='none' url='productUrl'   
    products={allProducts.filter(products => products.category !== 'electronics')}/>

    }
    else if(filteredProducts.length !== 0){
      myProducts =   <ProductItems className={classes.myproducts} boxShadow='none' url='productUrl'   
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
