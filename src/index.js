import React from 'react';
import ReactDOM from 'react-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import store from './store/Index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCartPlus, faPlus, faMinus, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter} from 'react-router-dom'

library.add(fab, faCheckSquare, faCartPlus, faPlus, faMinus, faWindowClose)

const app = (
  <BrowserRouter>
    <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>
)
  


ReactDOM.render(
 
  <React.StrictMode>
   {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
