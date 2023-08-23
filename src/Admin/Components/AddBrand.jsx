
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import {storage} from '../utils/FirebaseConfig'
 import {  ref, uploadBytes,getDownloadURL} from "firebase/storage";


function AddBrand() {
  const [show, setShow] = useState(false);
  const [BrandName, setBrandName] = useState('');
  const [BrandImage, setBrandImage] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:3500/api/all-brand').then((json)=>console.log(json))
   .catch(( error)=>console.log(error))
 
   },[] )
   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SubmitBrand = (e) => {
    e.preventDefault();
    // const payload ={BrandName,BrandImage}
    // console.log(payload)
    console.log(BrandImage.name)
  const storageRef = ref(storage,`images/${BrandImage.name}`);
    uploadBytes(storageRef, BrandImage).then((snapshot) => {
        getDownloadURL(snapshot.ref)
  .then((url) => {
    console.log(url)
    const payload={
        BrandName,
        BrandImage:url
    
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
        Add Brand
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={SubmitBrand}>
            <div className="mb-3">
              <label htmlFor="exampleInputBrandName1" className="form-label">
                BrandName
              </label>
              <input
                type="text"
                value={BrandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="form-control"
                id="BrandName"
                aria-describedby="BrandNameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Brand Image
              </label>
              <input onChange={(e)=>setBrandImage(e.target.files[0])}  className="form-control" type="file" id="formFile" />
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

export default AddBrand;






