import React, { useState } from 'react'
import Input from '../components/Form/Input'
import { useForm } from '../hooks/use-form'
import classes from './ResetPassword.module.scss'
import Button from '../components/UI/Button'
import Form from '../components/Form/Form'


const ResetPassword = () => {
    const [passwordReset, setPasswordReset] = useState(false)
  
    const {inputChangeHandler: ResetemailHandler, inputBlurHandler: ResetemailBlur, 
        inputData: resetEmailData, isValid: resetEmailValid, errorMessage: resetError,touched: emailTouched} = useForm('email')



const submit = (event) => {
event.preventDefault()
}

const submitFormHandler = () => {
if(emailTouched && resetEmailValid){

    setPasswordReset(true)

}

}



    return (
        <div className={classes.ResetPassword}>
            <p>A link will be sent to your email address to reset your password. Your IP address may be logged for security purposes.</p>
            <Form onSubmit={submit}>
        
           <Input istouched={emailTouched.toString()}  isvalid={resetEmailValid.toString()} required onBlur={ResetemailBlur} onChange={ResetemailHandler} value={resetEmailData} display='block' label='Email' />
           <p className={classes.errorMessage}>{resetError}</p>

        

        <Button onClick={submitFormHandler} className='fullWidth'>Reset Password</Button>
       {passwordReset && <p className={classes.registerLogin}> An Email has been sent with reset Link</p>}
            </Form>
        </div>
    )
}

export default ResetPassword
