
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {storage} from '../utils/FirebaseConfig'
 import {  ref, uploadBytes,getDownloadURL} from "firebase/storage";


function ProductModal() {
  const [show, setShow] = useState(false);
  const [ProductName, setProductName] = useState('');
  const [ProductImage, setProductImage] = useState(null);

  useEffect(()=>{
   axios.get('http://localhost:3500/api/get-all-products').then((json)=>console.log(json))
  .catch(( error)=>console.log(error))

  },[]


  )
   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SubmitProduct = (e) => {
    e.preventDefault();
   
    console.log(ProductImage.name)
  const storageRef = ref(storage,`images/${ProductImage.name}`);
    uploadBytes(storageRef, ProductImage).then((snapshot) => {
        getDownloadURL(snapshot.ref)
  .then((url) => {
    console.log(url)
    const payload={
        ProductName,
        ProductImage:url
    
    }
    console.log(payload)
    
  })
  .catch((error) => {
  console.log(error)
  });
     
    
      });  
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        AddProduct
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={SubmitProduct}>
            <div className="mb-3">
              <label htmlFor="exampleInputProductName1" className="form-label">
                ProductName
              </label>
              <input
                type="text"
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                className="form-control"
                id="ProductName"
                aria-describedby="ProductNameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Product Image
              </label>
              <input onChange={(e)=>setProductImage(e.target.files[0])}  className="form-control" type="file" id="formFile" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;








