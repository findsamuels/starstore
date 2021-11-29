import React from 'react'
import classes from './PageHeader.module.scss'
const PageHeader =props => {
    return (
        <div className={classes.PageHeader}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            
        </div>
    )
}

export default PageHeader
