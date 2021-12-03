import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import Modal from '../UI/Modal'
import classes from './CartItems.module.scss'
import Button from '../UI/Button'
import Icon from '../UI/Icon'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cartSlice'
const CartItems = () => {

    const dispatch = useDispatch()
const {cartItems,totalPrice} = useSelector(state => state.cart)

const addProductHandler = (id,title,price,totalItemPrice) => {
    let quantity = 1
    const myCartItems = {
        id,
        title,
        price,
        quantity,
        totalItemPrice: totalItemPrice + price
    }
    dispatch(cartActions.addProduct(myCartItems))
}

const removeProductHandler = (id,title,price,totalItemPrice,disabled) => {
    let quantity = 1
   
    const myCartItems = {
        id,
        title,
        price,
        quantity,
        disabled,
        totalItemPrice: totalItemPrice - price
    }
    dispatch(cartActions.removeProduct(myCartItems))

}

let cartItem = ''
cartItem = cartItems.map(item => {
    return(
        <Row key={item.id} className={classes.CartItems}>
 <Col md='7'>
                <h5>{item.title} <span className={classes.quantity}> * {item.quantity}</span></h5>
                <p>${item.price.toFixed(2)}</p>
                </Col> 

                <Col md='3' className={classes.addAndRemove}>
                    <div onClick={() => removeProductHandler(item.id, item.title, item.price, item.totalItemPrice,item.disabled)} className={classes.icons}>
                    <Icon  icon='minus' />
                    </div>
                    <div onClick={() => addProductHandler(item.id, item.title, item.price, item.totalItemPrice)} className={classes.icons}>
                    <Icon  icon='plus' />
                    </div>
                
               
                </Col>
                </Row>
    )
})

    return (
        <Modal title={'Order Summary'}>    
        {cartItems.length > 0 && <Fragment>{cartItem}
            <h6 className={classes.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</h6>
            <div className={classes.submitSection}>
            <Button >Check Out</Button>
            </div></Fragment> }
             
          
           
        </Modal>
            
        
    )
}

export default CartItems
