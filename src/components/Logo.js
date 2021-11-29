import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Logo.module.scss'
const Logo = () => {
    return (
        <div className={classes.Logo}>
           
            <Link className={classes.LogoLink} to='/'>STAR STORE</Link>
        </div>
    )
}

export default Logo
