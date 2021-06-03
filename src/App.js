import React from 'react'
import Dashboard from './Containers/Dashboard'
import Categorylist from './Containers/Products/Category/Categorylist'
import Brandlist from './Containers/Products/Brand/Brandlist' 
import Products from './Containers/Products/Products' 
import Addproduct from './Containers/Products/Addproduct' 
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/categories" component={Categorylist}></Route>
      <Route path="/brands" component={Brandlist}></Route>
      <Route path="/all-products" component={Products}></Route>
      <Route path="/add-product" component={Addproduct}></Route>
    </Router>
 
  )
}
