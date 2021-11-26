import React from 'react'
import Button from '../components/UI/Button'
import classes from './AuthUser.module.scss'
const AuthUser = () => {
    return (
        <Button className={classes.AuthUser}>
                Login/Register
            </Button>
    )
}

export default AuthUser
