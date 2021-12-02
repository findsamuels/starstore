import React, { useState } from 'react'
import Input from '../components/Form/Input'
import { useForm } from '../hooks/use-form'
import classes from './Profile.module.scss'
import Button from '../components/UI/Button'
import Form from '../components/Form/Form'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Profile = () => {
    const [passwordReset, setPasswordReset] = useState(false)

    const {inputChangeHandler: passwordHandler, inputBlurHandler: passwordBlur, 
        inputData: passwordData, isValid: passwordValid, errorMessage: passwordError,touched: passwordTouched} = useForm('password')

        const {token} = useSelector(state => state.auth)
const [changedPassword, setChangePassword] = useState(true)



const submit = (event) => {
event.preventDefault()
}

const changePassword = () => {
    setChangePassword(false)
}

const submitFormHandler = () => {
if(passwordTouched && passwordValid){


    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCzZIZNcakxDaNMSHEHJ56wATc9jPh1-n8',{
        idToken: token ,
        password: passwordData,
        returnSecureToken: true,
        Headers:{
            'Content-Type': 'application/json'
        } 
    })
    .then(res => {
       

        setPasswordReset(true)
        setChangePassword(true)
    })
    .catch(err => {
     

        setPasswordReset(false)
    })

}

}



    return (
        <div >

            <h4 className={classes.ProfileHeader} >Welcome back User </h4>
<div className={classes.Profile}>
    {changedPassword && <div className={classes.changePasswordDiv} ><p>You can change your password here. </p>
            
    {passwordReset && <p className={classes.registerLogin}> Password Changed</p>}

            <Button onClick={changePassword}>Change Password</Button></div> }

{!changedPassword && <Form onSubmit={submit}>
        
        <Input istouched={passwordTouched.toString()}  isvalid={passwordValid.toString()} required onBlur={passwordBlur} onChange={passwordHandler} value={passwordData} display='block' label='New Password' />
        <p className={classes.errorMessage}>{passwordError}</p>

     

     <Button onClick={submitFormHandler} className='fullWidth'>Reset Password</Button>
    
         </Form>}
            
            
            
            
        </div>
        </div>
    )
}

export default Profile
