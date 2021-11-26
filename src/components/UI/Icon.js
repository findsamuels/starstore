import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classes from './Icon.module.scss'

const Icon = props => {
    return (
        <FontAwesomeIcon className={`${classes.Icon} ${props.className}`} {...props}/>
    )
}

export default Icon
