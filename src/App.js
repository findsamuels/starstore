import './App.css';
import React, {Suspense, useEffect} from 'react';
import Layout from './components/UI/Layout';
import { Redirect, Route,Switch  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from './store/productSlice';
import { authActions } from './store/authSlice';

const Home = React.lazy(() => import('./pages/Home'))
const Products = React.lazy(()=> import('./pages/Products'))
const ProductType = React.lazy(() => import('./pages/ProductType'))
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'))
const NotFound = React.lazy(()=> import('./pages/NotFound'))
const Login = React.lazy(() => import('./pages/Login'))
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'))
const Profile = React.lazy(() => import('./pages/Profile'))
function App() {

  const dispatch = useDispatch()

  
  const {isAuth,remainingTime} = useSelector(state => state.auth)
  
useEffect(() => {
  dispatch(getProducts())
}, [dispatch] )

useEffect(() => {
  if(isAuth){
    setTimeout(() => {
      dispatch(authActions.logOut())
    },remainingTime);
    
  }
 
},[dispatch,isAuth,remainingTime])




useEffect(() => {
  const initialToken = JSON.parse(localStorage.getItem('token'))
 
  if(initialToken !== null ){
    const loginData = {
      token: initialToken,
      expirationTime: ''
  }
    
                dispatch(authActions.logIn(loginData))

  }

}, [dispatch, isAuth] )

  return (
    <div className="App">
    <Layout>
      <Suspense fallback={<p className='centered'>Loading</p>}>
        <Switch>
    <Route path='/home' exact>
    <Redirect to='/'></Redirect>
    </Route>
    <Route path='/' exact>
<Home/>
    </Route>


    <Route path='/resetPassword'>
    <ResetPassword/>
    </Route>
    
     <Route path='/login'>
     {!isAuth ?  <Login/> : <Redirect to='/profile'/> }
    </Route> 

 <Route path='/profile'>
 { isAuth  ?  <Profile/> :  <Redirect to='/login'/>}
 </Route>
   
    <Route path='/products' exact >
      <Products/>
    </Route>
    <Route path='/products/:productCategory' exact >
      <ProductType/>
    </Route>
    <Route path='/products/:productCategory/:productDetails' exact>
      <ProductDetails/>
    </Route>
    
    
    
    <Route path='*'>
    <NotFound/>
    </Route>
    </Switch>
      </Suspense>
    </Layout>
    </div>
  );
}

export default App;
