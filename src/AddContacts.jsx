import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { userContext } from './App';

function AddContacts() {

    const nav = useNavigate();

    const{contacts,setContacts} = useContext(userContext);

    const [add,setAdd] = useState({firstName:"",lastName:"",phone:"",email:"",image:"",address:"",city:"",state:""})

    // Image Uploading
    const [file, setFile] = useState('');

    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function addFn(e){
        setAdd({...add,[e.target.name] : e.target.value});
    }

    add.image = file;

    function submit(e) {
        e.preventDefault(); //used only in form submission
        const newData = [...contacts,add];
        setContacts(newData);
        nav(-1); //it will goes to previous page
    }


  return (
    <div style={{width:"50%",margin:"10px 350px",border:"2px solid #00ffff",padding:"10px"}}>
    <Form  onSubmit={submit} style={{padding:"30px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" name='lastName' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Address" name='address' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" name='city' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="Enter State" name='state' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" name='phone' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email ID" name='email' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Enter Image" name='image'  onChange={handleChange} required/>
      </Form.Group>

      <div className='text-center'>
        <Button variant="primary" type='submit' >
          ADD CONTACT
        </Button>
      </div>
    </Form>
  </div>
  )
}

export default AddContacts