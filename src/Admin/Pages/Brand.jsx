import React from 'react'
import AddBrand from '../Components/AddBrand'

export default function Brand() {
  return (
    <div className='container'>
      <div className="d-flex justify-content-between my-2">
        <span className='fw-bold fs-3'>Brands</span>
        <AddBrand/>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">BrandName</th>
              <th scope="col">BrandImage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Makeupcity</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Krylon</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Etude</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
 