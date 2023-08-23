import React from 'react'
import ProductModal from '../Components/ProductModal'
export default function Product() {
  return (
    <div className='container'>
      <div className="d-flex justify-content-between my-2">
        <span className='fw-bold fs-3'>Product</span>
        <ProductModal/>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">ProductName</th>
              <th scope="col">ProductImage</th>
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
  );
}
 