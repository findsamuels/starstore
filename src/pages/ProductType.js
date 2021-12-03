import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'

import { Row } from 'react-bootstrap'
import { getProductsByCategies } from '../store/productCategorySlice'

import ProductFilter from '../components/products/ProductFilter'
import ProductItems from '../components/products/ProductItems'
import Wrapper from '../components/UI/Wrapper'
import PageHeader from '../components/PageHeader'
import classes from './ProductType.module.scss'
import Loading from '../components/UI/Loading'

const ProductType = () => {

    const params = useParams()
  
    const dispatch = useDispatch()

    
    useEffect(() => {  
        dispatch(getProductsByCategies(params.productCategory))
    },[dispatch, params])

    const {allProducts, loading,errorMessage,filteredProducts}  = useSelector(state => state.products)
 
   
    let showProductType = ''
    if(loading){
        showProductType = <Loading/>  
   
    }
    else if(!loading && errorMessage !== null){
        showProductType = <p>{errorMessage}</p>  
    }

    else if(filteredProducts.length === 0 ){
        showProductType = <ProductItems className={classes.myproducts} boxShadow='none'  url='productTypeUrl' products={allProducts.filter(products => products.category === params.productCategory)}/>
    }
    else if(filteredProducts.length !== 0){
        showProductType = <ProductItems className={classes.myproducts} boxShadow='none'  url='productTypeUrl' products={filteredProducts.filter(products => products.category === params.productCategory)}/>
    }

   
        
    
    return (  
        <Wrapper className='productItems'>
            <PageHeader title={params.productCategory} description={`You can find different collection of our ${params.productCategory} , feel free to find something that suits your needs.`}/>
           
            <Row className='centeredRow'>
          
        <ProductFilter  breadCrumbUrl={`Home > Products > ${params.productCategory}`} />
        
            {showProductType}
   
            </Row>
        
            
            
        </Wrapper> 
        
    )
}

export default ProductType
