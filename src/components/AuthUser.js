import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link ,useHistory} from 'react-router-dom'
import Button from '../components/UI/Button'
import { authActions } from '../store/authSlice'
import classes from './AuthUser.module.scss'
const AuthUser = () => {

    const history = useHistory()
    const {isAuth} = useSelector(state => state.auth)
const dispatch = useDispatch()
    const logout = () => {
dispatch(authActions.logOut())
history.replace('/')
    }

let authUser;

if (!isAuth){
  authUser =  (

        
               
               <Link className='noDecoration' to='/login'>
                   <Button className={classes.AuthUser}>
                   Login / Register
                   </Button>
                   </Link>
       
    )

}
if(isAuth ){
   authUser =  <div className={classes.loggedInDiv}>
    <p>Welcome Back</p>
    
               
               <Link className='noDecoration' to='/profile'>
               <Button className={classes.AuthUserProfile}>
                   Profile
                   </Button>
                   </Link>
           
                   <Button onClick={logout} className={classes.AuthUser}>
              Log Out
               </Button>
               </div>
}
    return (
        <Fragment>
           {authUser}

        </Fragment>
       
       
    )
}

export default AuthUser
