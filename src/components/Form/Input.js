import React, { Fragment } from 'react'
import classes from './Input.module.scss'

const Input = props => {

let inputvalid = ''
let istouched = '' 
let isvalid = '' 

if(props.istouched){
istouched = JSON.parse(props.istouched)
}

if(props.isvalid){
    isvalid = JSON.parse(props.isvalid)
    }
    
if(istouched && isvalid){
    inputvalid = classes.isValid
}

switch (props.elementconfig) {
    case 'text':
        return(
            


<Fragment>
                <label htmlFor={props.id}>{props.label}</label>
                <input
            {...props}
            className={`${classes.Input} ${props.className } ${props.border ? classes[props.border] : null}`}
            
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
        className={`${classes.Input} ${props.className}  ${classes[props.display]} ${!isvalid && classes.invalid} ${ inputvalid}`}
        
        />
        </Fragment>
        )   
            
        }
   
}

export default Input
