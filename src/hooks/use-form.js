import  { useState } from "react"



export const useForm = (inputType) => {

    const [inputData, dispatch] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [touched, setTouched] = useState(false)

    let regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const inputBlurHandler = (event) => {
        
        switch (inputType) {
            case 'email':
                if( !regex.test(event.target.value)){
                    setIsValid(false)
                    setErrorMessage('Please enter a valid email')
                    
                }
                break;
                case 'username':
                    if(event.target.value.length < 1){
                        setIsValid(false)
                    setErrorMessage('Username cannot be Empty')
                    }
                    break;
                    case 'password':
                    if(event.target.value.length < 6){
                        setIsValid(false)
                    setErrorMessage('Password must be longer than 6 characters')
                    }
                    break;
            default:
                break;
        }

    }

const inputChangeHandler = (event) => {
    setTouched(true)
    dispatch(event.target.value)

    switch (inputType) {
        case 'email':
            if( touched && regex.test(event.target.value)){
                setIsValid(true)
                setErrorMessage('')   
            }  
            break;
            case 'username':
                if( touched && event.target.value.length > 1){
                    setIsValid(true)
                    setErrorMessage('')
                }
                break;
                case 'password':
                if(touched && event.target.value.length >=6 ){
                    setIsValid(true)
                    setErrorMessage('')
                }
                break;
        default:
            break;
    }
  
}

    return {
inputChangeHandler,
inputData,
isValid,
inputBlurHandler,
errorMessage,
touched
    }
}