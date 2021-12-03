import React, {useState } from 'react'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import classes from './Login.module.scss'
import Button from '../components/UI/Button'
import { useForm } from '../hooks/use-form'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { authActions } from '../store/authSlice'
import axios from 'axios'

const Login = () => {
    const history = useHistory()

    const [isRegistered, setIsRegistered] = useState(true)
    const dispatch = useDispatch()
const [errMessage, SetErrorMessage] = useState('')
    const [isLoading, setLoading] = useState(false)
   
    

    const {inputChangeHandler: emailHandler, inputBlurHandler: emailBlur, 
        inputData: emailData, isValid: emailValid, errorMessage: emailErrorMessage, touched: emailTouched} = useForm('email')

        const {inputChangeHandler: UserNameHandler, inputBlurHandler: userNameBlur, 
            inputData: userNameData, isValid: userNameValid, errorMessage: userNameErrorMessage, touched: userTouched} = useForm('username')

            const {inputChangeHandler: passwordhandler, inputBlurHandler: passwordBlur, 
                inputData: passwordData, isValid: passwordValid, errorMessage: passwordErrorMessage, touched: passwordTouched} = useForm('password')

    const switchLogin = () => {
setIsRegistered(isRegistered => isRegistered = !isRegistered)
SetErrorMessage('')
    }

    const submit = (event) => {
        event.preventDefault()
    }

    const submitFormHandler = async () => {

        if(isRegistered){

            if(emailValid && emailTouched  && passwordTouched && passwordValid){
               setLoading(true) 
       await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzZIZNcakxDaNMSHEHJ56wATc9jPh1-n8',{ 
           
                    email: emailData,
                    password: passwordData,
                    returnSecureToken: true
                ,
                Headers:{
                    'Content-Type': 'application/json'
                }
    
            })
            .then(res => {
                setLoading(false)
        
                const expirationTime = new Date((new Date().getTime() + (+res.data.expiresIn * 1000)))
                SetErrorMessage('')
                const loginData = {
                    token: res.data.idToken,
                    expirationTime: expirationTime.toISOString()
                }
                dispatch(authActions.logIn(loginData))
                history.replace({
                    pathname: '/profile'
                })

            })
            .catch(err => {
                setLoading(false)
                SetErrorMessage('Invalid username or password')
            })
            }

        }



        else{
            if(emailValid && emailTouched && userTouched && userNameValid && passwordTouched && passwordValid){
           
                setLoading(true) 
                await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCzZIZNcakxDaNMSHEHJ56wATc9jPh1-n8',{ 
                    
                             email: emailData,
                             username: userNameData,
                             password: passwordData,
                             returnSecureToken: true
                         ,
                         Headers:{
                             'Content-Type': 'application/json'
                         }
             
                     })
                     .then(res => {
                         setLoading(false)
                         SetErrorMessage('')
                         console.log(res.data)
                      
                         const expirationTime = new Date((new Date().getTime() + (+res.data.expiresIn * 1000)))
                         SetErrorMessage('')
                         const loginData = {
                             token: res.data.idToken,
                             expirationTime: expirationTime.toISOString()
                         }
                         dispatch(authActions.logIn(loginData))
                         history.replace({
                             pathname: '/profile'
                         })
                     })
                     .catch(err => {
                         setLoading(false)
                         SetErrorMessage('User already exists, please log in ')
                     })

            }
            else{
                console.log('Check register Form Field')
            }
        }

    }
    let confirmRegistration;

    if(isLoading){
confirmRegistration = <p style={{textAlign: 'start', color: 'grey'}}>Loading...</p>
    }
    if(errMessage.length > 0){
        confirmRegistration = <p style={{textAlign: 'start', color: 'red'}}>{errMessage}</p>
            }
    
    return (
        <div className={classes.Login}>
            <h2>{isRegistered ? 'Log In': 'Sign up for a free account'}</h2>
            {isRegistered?  
            <p>Don't have an account? <span onClick={switchLogin} className={classes.registerLogin}> click here to register</span></p> :
            <p>Already registered ? <span onClick={switchLogin} className={classes.registerLogin}> click here to login</span></p> 
            }
           
            <Form onSubmit={submit}>
            <Input type='email' istouched={emailTouched.toString()}  isvalid={emailValid.toString()} onBlur={emailBlur} onChange={emailHandler} value={emailData} display='block' label='Email' />
            <p className={classes.errorMessage}>{emailErrorMessage}</p>

            {!isRegistered && 
            <Input istouched={userTouched.toString()}  isvalid={userNameValid.toString()} onBlur={userNameBlur} onChange={UserNameHandler} value={userNameData} display='block' label='Username' />
            }
        <p className={classes.errorMessage}>{userNameErrorMessage}</p>


            <Input type='password' istouched={passwordTouched.toString()} isvalid={passwordValid.toString()} onBlur={passwordBlur} onChange={passwordhandler} value={passwordData} display='block' label='Password'/>
           <p className={classes.errorMessage}>{passwordErrorMessage}</p>





            {isRegistered && <Link to='/resetPassword'  className={classes.registerLogin}> Forgot Password?</Link>}


            <Button onClick={submitFormHandler} className='fullWidth'>{isRegistered ? 'LOGIN' : 'REGISTER NOW'}</Button>
            </Form>
            {confirmRegistration}
            <p className={classes.help}>Trouble logging or registering? Make sure browser cookies and JavaScript are enabled.</p>
            
        </div>
    )
}

export default Login
