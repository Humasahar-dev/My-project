
import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
import {storage} from '../utils/FirebaseConfig'
 import {  ref, uploadBytes,getDownloadURL} from "firebase/storage";


function CategoryModal() {
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState('');
  const [CategoryImage, setCategoryImage] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:3500/api/get-all-categories').then((json)=>console.log(json))
   .catch(( error)=>console.log(error))
 
   },[]
 
 
   )
   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SubmitCategory = (e) => {
    e.preventDefault();
    
    console.log(CategoryImage.name)
  const storageRef = ref(storage,`images/${CategoryImage.name}`);
    uploadBytes(storageRef, CategoryImage).then((snapshot) => {
        getDownloadURL(snapshot.ref)
  .then((url) => {
    console.log(url)
    const payload={
        CategoryName,
        CategoryImage:url
    
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
        Add Category
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={SubmitCategory}>
            <div className="mb-3">
              <label htmlFor="exampleInputCategoryName1" className="form-label">
                CategoryName
              </label>
              <input
                type="text"
                value={CategoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="form-control"
                id="CategoryName"
                aria-describedby="CategoryNameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Category Image
              </label>
              <input onChange={(e)=>setCategoryImage(e.target.files[0])}  className="form-control" type="file" id="formFile" />
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

export default CategoryModal;






