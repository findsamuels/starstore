import React from 'react'
import classes from './ProductItems.module.scss'
import Card from '../UI/Card'


import { Link , useRouteMatch, useParams} from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const ProductItems = props => {
const match = useRouteMatch()
const params = useParams()
console.log(match)
console.log(params.productCategory)



let myProductItems = ''
let url = '';
    myProductItems = props.products.filter(item=> item.category ).map(item => {
        
       
        switch (props.url) {
            case 'productCategoryUrl':
                url =`products/${item.category}`
                break;
        case 'productTypeUrl':
            url = `${match.url}/${item.id}`
            break;
            case 'productUrl':
            url = `${match.url}/${item.category}/${item.id}`
            break;
            default:
                break;
                
        }
        

        return(
            <Col key={item.id} md='3'  className={classes.ProductItems}>
            <Link 

            to={url} >
      <Card Key={item.id} background={item.image} className={classes.Products} >
        
                <div className={classes.descAndTitle}>
                <h5>{item.title}</h5>
                {item.price && <h5 className={classes.price}>${item.price}</h5>}
                </div> 
                
            
            </Card>
      </Link>
            </Col>
      
    
            
            
        )
    })



    return (
        <Row className='productItems'>
            {myProductItems}
        </Row>

    ) 
}

export default ProductItems
