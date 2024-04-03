import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className='btn btn-light text-dark m-5' onClick={handleShow} >Add</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <div className="row">
        <div className="col-6 mt-4 p-5">
          <label>
          <input type='file' style={{display:'none'}}/>
          <img width={'200px'} src="https://as1.ftcdn.net/v2/jpg/05/56/29/36/1000_F_556293653_e9P80XtK4yyDd8WU1vRtdqSU1Vym7zoX.jpg" alt=""/>
        
          </label>
        </div>
        <div className="col-6 text-center">
        <input type="text" placeholder='Project title' className='form-control mb-3' />
        <input type="text" placeholder='Languages Used' className='form-control mb-3' />
        <input type="text" placeholder='Git hub link' className='form-control mb-3' />
        <input type="text" placeholder='Overview' className='form-control mb-3' />


        </div>
       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject