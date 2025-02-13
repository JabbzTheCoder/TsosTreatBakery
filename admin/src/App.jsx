import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Sidebar from './componets/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import AddProducts from './pages/AddProducts/AddProducts'
import ListProducts from './pages/ListProducts/ListProducts'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<AddProducts/>}/>
          <Route path="/list" element={<ListProducts/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes> 
      </div>
    </div>
  )
}

export default App
