import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Order from './Order'
import OrderSuccess from './OrderSuccess'
import './App.css'

function App() {
 return (
  <BrowserRouter>
     <Switch>
       <Route path='/' exact>
        <div>App</div>
       </Route>
       <Route path='/order' ><Order/></Route>
       <Route path='/orderSuccess' ><OrderSuccess/></Route>
     </Switch>
   </BrowserRouter>
 )
}

export default App
