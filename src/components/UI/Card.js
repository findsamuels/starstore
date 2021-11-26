import React from 'react'
import classes from './Card.module.scss'
const Card = props => {
    return (
        <div key={props.Key} style={{background: `url(${props.background})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className={`${classes.Card } ${props.className} ${classes[props.boxShadow]}`}>
            {props.children}
        </div>
    )
}

export default Card
