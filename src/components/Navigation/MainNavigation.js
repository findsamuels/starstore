import React from 'react'
import classes from './MainNavigation.module.scss'
import NavigationItem from './NavigationItem'
const MainNavigation = () => {
    return (
        <ul className={classes.MainNavigation}>
            <NavigationItem/>
        </ul>
    )
}

export default MainNavigation
