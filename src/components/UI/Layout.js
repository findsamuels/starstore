import React, {Fragment} from 'react'
import CartItems from '../Cart/CartItems'
import Header from '../Header/Header'
import MainNavigation from '../Navigation/MainNavigation'
import classes from './Layout.module.scss'


const Layout = props => {
    return (
        <Fragment>
            <Header/>
            <MainNavigation/>
            <CartItems/>
            <main className={classes.Layout}>{props.children}</main>
            </Fragment>
    )
}

export default Layout
