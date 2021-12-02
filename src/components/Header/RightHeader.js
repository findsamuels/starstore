import React from 'react'
import classes from './RightHeader.module.scss'

import AuthUser from '../AuthUser'
import CartButton from '../Cart/CartButton'

const RightHeader = () => {
    return (
        <div className={classes.RightHeader}>
           
            <AuthUser/>
            <CartButton/>
        </div>
    )
}

export default RightHeader
