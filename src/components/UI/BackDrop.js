import React from 'react'
import  ReactDOM  from 'react-dom'
import classes from './BackDrop.module.scss'
const BackDrop = (props) => {
    return (
        <div onClick={props.onClick} className={`${classes.BackDrop} ${props.show && classes.show}`}>
            
        </div>
    )
}


ReactDOM.createPortal(BackDrop, document.getElementById('backDrop'))

export default BackDrop
