import React from 'react'
import CategoryModal from '../Components/CategoryModal'

export default function Category() {
  return (
    <div className='container'>
      <div className="d-flex justify-content-between my-2">
        <span className='fw-bold fs-3'>Category</span>
        <CategoryModal/>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">CategoryName</th>
              <th scope="col">CategoryImage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cosmetic</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>perfumes</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Skincare</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
 