import React from 'react'
import OrderModal from '../Components/OrderModal'

export default function Order() {
  return (
    <div className='container'>
      <div className="d-flex justify-content-between my-2">
        <span className='fw-bold fs-3'>Order</span>
        <OrderModal/>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">OrderName</th>
              <th scope="col">OrderImage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Makeup</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mens&Womens perfumes</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Natural skincare</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
