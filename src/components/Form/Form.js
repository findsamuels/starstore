import React from 'react'
import classes from './Form.module.scss'
const Form = props => {
    return (
        <div className={`${classes.Form} ${props.className}`} {...props}>
           {props.children} 
        </div>
    )
}

export default Form
