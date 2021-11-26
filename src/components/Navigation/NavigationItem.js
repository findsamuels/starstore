import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationItem.module.scss'
const NavigationItem = () => {

  
    return (
        <React.Fragment>
        <li  className={classes.NavigationItem}><NavLink  to='/' activeClassName={classes.active} exact>Home</NavLink></li>
        <li className={classes.NavigationItem} ><NavLink   to='/products' activeClassName={classes.active} exact>All Products</NavLink></li>
        <li className={classes.NavigationItem}> <NavLink  to={`/products/men's clothing`} activeClassName={classes.active} exact>Mens Clothing</NavLink></li>
        <li className={classes.NavigationItem}><NavLink  to={`/products/women's clothing`} activeClassName={classes.active} exact>Womens Clothing</NavLink></li>
        <li className={classes.NavigationItem}> <NavLink   to={`/products/jewelery`} activeClassName={classes.active} exact>Jewerly</NavLink></li>

        </React.Fragment>
    )
}

export default NavigationItem
