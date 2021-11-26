import React from 'react'
import SearchBar from '../SearchBar'
import classes from './RightHeader.module.scss'

import AuthUser from '../AuthUser'
import CartButton from '../Cart/CartButton'

const RightHeader = () => {
    return (
        <div className={classes.RightHeader}>
            <SearchBar/>
            <AuthUser/>
            <CartButton/>
        </div>
    )
}

export default RightHeader
