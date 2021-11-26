import React, { Fragment } from 'react'
import classes from './Input.module.scss'

const Input = props => {

switch (props.elementConfig) {
    case 'text':
        return(
            


<Fragment>
                <label htmlFor={props.id}>{props.label}</label>
                <input
            {...props}
            className={`${classes.Input} ${props.className} ${props.border ? classes[props.border] : null}`}
            
            />
            </Fragment>

        )
     
        case 'select':
        return(
            <Fragment>
                <label htmlFor={props.id}>{props.label}</label>
            <select 
            
            {...props}
            
            className={`${classes.Select} ${props.className}`}>
                {props.children}
                   
            </select>
            </Fragment>
           
        )
        case 'radio':
            return(


               <div className={classes.inputGroup}>
<label htmlFor={props.id}>{props.label}</label>
         
         <input 
         checked={props.checked}
     {...props}
     className={`${classes.Radio}  ${props.className } ${props.border ? classes[props.border] : null}`}
     
     />
               </div>
                
            



            )

    default:
        return (
            <Fragment>
            <label htmlFor={props.id}>{props.label}</label>
     
            <input
        {...props}
        className={`${classes.Input} ${props.className}`}
        
        />
        </Fragment>
        )   
            
        }
   
}

export default Input
