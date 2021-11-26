import './App.css';
import React, {Suspense, useEffect} from 'react';
import Layout from './components/UI/Layout';
import { Redirect, Route,Switch  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getProducts} from './store/productSlice';

const Home = React.lazy(() => import('./pages/Home'))
const Products = React.lazy(()=> import('./pages/Products'))
const ProductType = React.lazy(() => import('./pages/ProductType'))
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'))
const NotFound = React.lazy(()=> import('./pages/NotFound'))

function App() {

  const dispatch = useDispatch()


useEffect(() => {
  dispatch(getProducts())
}, [] )

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
