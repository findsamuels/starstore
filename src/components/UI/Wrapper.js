import React from 'react'
import classes from './Wrapper.module.scss'

const Wrapper = props => {
    return (
        <div className={`${classes.Wrapper} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Wrapper
