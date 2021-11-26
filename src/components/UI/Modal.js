import React from 'react'
import  ReactDOM  from 'react-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { uiActions } from '../../store/uiSlice'
import BackDrop from './BackDrop'
import Card from './Card'
import Icon from './Icon'
import classes from './Modal.module.scss'
const Modal = props => {

    const {showModal} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const hideModal = () => {
dispatch(uiActions.hideModal())
    }

    return ReactDOM.createPortal( 
        <React.Fragment>
<BackDrop show={showModal} onClick={hideModal}/>
 <Card className={`
        ${classes.Modal} 
            ${showModal && classes.show}`} >
                <div className={classes.modalHeader}>
                    <h5 className={classes.title}>{props.title}</h5 >
                    <div style={{fontSize: '30px'}} onClick={hideModal}><Icon  icon='window-close' /></div>
                </div>
                <div className={classes.modalBody}>
                    {props.children? props.children : <p style={{textAlign: 'center'}}>Nothing to show here</p>}
                    
                    </div>
                    {/* <div className={classes.modalFooter}>
                    
                    </div> */}
            </Card>
        </React.Fragment>,
        
        
            document.getElementById('modal'))
        
}
 

export default Modal
