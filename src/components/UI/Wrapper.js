import React from 'react'
import { Row } from 'react-bootstrap'
import classes from './Wrapper.module.scss'

const Wrapper = props => {
    return (
        <Row className={`${classes.Wrapper} ${props.className}`}>
            {props.children}
        </Row>
    )
}

export default Wrapper
