import React, { Fragment } from 'react'
import Banner from '../components/Banner/Banner'
import bannerImage from '../assets/img/banner.jpg'
import ProductItems from '../components/products/ProductItems'
import women from '../assets/img/men.jpg'
import men from '../assets/img/womens.jpg'
import Jewerly from '../assets/img/jewerly.jpg'
import Wrapper from '../components/UI/Wrapper'
import classes from './Home.module.scss'
const Home = () => {

    const allProducts = [
        {
            id: 1,
            image: men,
            category: `men's clothing`,
            title: 'Men Clothing'
    
        },
        {
            id: 2,
            image: women,
            category: `women's clothing`,
            title: 'Women Clothing',
    
        },
        {
            id: 3,
            image: Jewerly,
            category: `jewelery`,
            title: 'Jewerly',
    
        }
    ]

    return (
       <Fragment>
  <Banner backgroundImage={bannerImage} headerText='welcome to star store' paragraphText='Your home to luxury fashion'/>
        <Wrapper>
          
           <ProductItems className={classes.homeProduct}  url='productCategoryUrl' products={allProducts}/>
       
        </Wrapper>
       </Fragment>

      
      
    )
}

export default Home
