import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import Icon from '../UI/Icon'
import classes from './CartButton.module.scss'
const CartButton = props => {
    
    const {amountInCart} = useSelector(state => state.cart)
const dispatch = useDispatch()
    const showCart = () => {
        dispatch(uiActions.showModal())
    }

    return (
        <div onClick={showCart} className={classes.CartButtonContainer}>
<Icon className={classes.CartButton} size='lg' icon='cart-plus'/>
{amountInCart > 0 && <p className={classes.CartAmount}>{amountInCart}</p>}

        </div>
        
    )
}

export default CartButton
