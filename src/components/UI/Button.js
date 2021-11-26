import React from 'react'
import classes from './Button.module.scss'
const Button = props=> {
    return (
        <button disabled={props.disabled} {...props} className={`${classes.Button} ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button
