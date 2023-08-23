import React from 'react'
import Sidebar from './Components/Sidebar'
import { Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Order from './Pages/Order'
import Brand from './Pages/Brand'
import Category from './Pages/Category'
import Logout from './Pages/Logout'




export default function Admin() {
  return (
    <div className="row p-0 m-0 ">
      <div className="col-md-3 m-0 p-0"><Sidebar/></div>
      <div className="col-md-9">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/product/*" element={<Product />}/>
        <Route path="/brand/*" element={<Brand />}/>
        <Route path="/order/*" element={<Order/>}/>
        <Route path="/category/*" element={<Category />}/>
        <Route path="/logout/*" element={<Logout />}/>
        <Route path="*" element={<Home />}/>



      </Routes>

      </div>
    </div>
  )
}
