
import {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {storage} from '../utils/FirebaseConfig'
 import {  ref, uploadBytes,getDownloadURL} from "firebase/storage";


function ProductModal() {
  const [show, setShow] = useState(false);
  const [OrderName, setOrdertName] = useState('');
  const [OrderImage, setOrderImage] = useState(null);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SubmitProduct = (e) => {
    e.preventDefault();
   
    console.log(ProductImage.name)
  const storageRef = ref(storage,`images/${OrderImage.name}`);
    uploadBytes(storageRef,OrderImage).then((snapshot) => {
        getDownloadURL(snapshot.ref)
  .then((url) => {
    console.log(url)
    const payload={
        OrderName,
        OrderImage:url
    
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
        Add Order
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={SubmitProduct}>
            <div className="mb-3">
              <label htmlFor="exampleInputOrderName1" className="form-label">
                OrderName
              </label>
              <input
                type="text"
                value={OrderName}
                onChange={(e) => setProductName(e.target.value)}
                className="form-control"
                id="ProductName"
                aria-describedby="OrderNameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Order Image
              </label>
              <input onChange={(e)=>setOrderImage(e.target.files[0])}  className="form-control" type="file" id="formFile" />
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








