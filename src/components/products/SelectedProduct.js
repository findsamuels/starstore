import React, { Fragment, useEffect, useState } from 'react'
import Form from '../Form/Form'
import Input from '../Form/Input'
import classes from './SelectedProduct.module.scss'
import Button from '../UI/Button'
import Card from '../UI/Card'
import { Col } from 'react-bootstrap'
import { useForm } from '../../hooks/use-form'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cartSlice'
const SelectedProduct = props => {
   const selectedProduct = props.products
   const dispatch = useDispatch()

   const {disabled, cartItems: myCart} = useSelector(state => state.cart)

   const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        let currentProductIndex = myCart.findIndex(product => product.id === selectedProduct.id)
        const currentCart = myCart[currentProductIndex]
        
        if(currentCart){
     
                setIsAdded(true)
          
            console.log('product added')
        }
        else{
            setIsAdded(false)
        }
    }, [myCart])


const [quantity, dispatchQuantity] = useState(1);

const qtySelectHandler = event => {

    dispatchQuantity(parseInt(event.target.value))
}


   const formHandler = (event) => {
event.preventDefault()
   }

   const submitProduct = (id,title,price,quantity) => {
     
const cartItems = {
    id,
    title,
    price,
    quantity,
    totalItemPrice: price * quantity
}



    
    dispatch(cartActions.addProduct(cartItems))  







   }
    return (
        <Fragment>
            <Col md='3'>
    <Card boxShadow='none' Key={selectedProduct.id}  className={classes.Products} >
<img src={selectedProduct.image} alt={selectedProduct.id}/>
    </Card>
    </Col>
    <Col md='6' className={classes.productDetails} >
    <h5>{selectedProduct.title}</h5>

    
    <p>{selectedProduct.description}</p>
    <p style={{fontWeight
    : 'bolder'}}>${selectedProduct.price}</p>
    <div>
    <Form onChange={formHandler}>
                <Input onChange={qtySelectHandler} label='Select Quantity'  id='productsQuantity' name='productsQuantity' elementConfig='select'>
                    <option selected value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </Input>
                
                
            </Form>
            <Button disabled={isAdded} onClick={() => submitProduct(selectedProduct.id, selectedProduct.title, selectedProduct.price, quantity
                )}>Add to cart</Button>
                <p style={{color: 'red'}}>{isAdded && ' Product in cart'}</p>

</div>

   
   
    </Col>
        </Fragment>
    )
}

export default SelectedProduct