import React from 'react'
import Logo from '../Logo';
import classes from './Header.module.scss';
import RightHeader from './RightHeader';
const Header = () => {
    return (
        <header className={classes.Header}>
            <Logo/>
            <RightHeader/>
        </header>
    )
}

export default Header
