import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from './Contact'
import Main from './Main'
import Shop from './Shop'
import Order from './Order'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
              <Route path="/" element={<Main />}></Route>
              <Route path="Contact" element={<Contact />}></Route>
              <Route path="Shop" element={<Shop />}></Route>
              <Route path="Order" element={<Order />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
)
