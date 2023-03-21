import React, { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from './App'

function EditContacts() {

  const contacts = useContext(userContext);
  const { id } = useParams();

  let singleContact = contacts.contacts[id];
  const nav = useNavigate();

  let address = singleContact.address.address,
      state   = singleContact.address.state,
      city    = singleContact.address.city;

  let [edit,setEdit] = useState({firstName:singleContact.firstName,lastName:singleContact.lastName,
    phone:singleContact.phone,email:singleContact.email,image:singleContact.image,address:address,
    state:state,city:city
  })

  const [file, setFile] = useState('');
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function addFn(e){
    setEdit({...edit,[e.target.name] : e.target.value});
  }

  edit.image = file;

  function submit(e) {
    e.preventDefault();
    setEdit(contacts.contacts[id] = edit);
    nav('/');
  }

  return (
    <div style={{width:"50%",margin:"20px 400px",border:"3px solid #00ffff",padding:"12px"}}>
    <Form onSubmit={submit} style={{padding:"30px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName" placeholder={singleContact.firstName} defaultValue={singleContact.firstName} onChange={addFn}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lastName' placeholder={singleContact.lastName} defaultValue={singleContact.lastName} onChange={addFn}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" name='phone' placeholder={singleContact.phone} defaultValue={singleContact.phone} onChange={addFn}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder={singleContact.email} defaultValue={singleContact.email} onChange={addFn}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder={address || singleContact.address} defaultValue={address || singleContact.address} name='address' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text"  placeholder={singleContact.city || city} defaultValue={singleContact.city || city} name='city' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Control type="text"  placeholder={singleContact.state || state} defaultValue={singleContact.state || state} name='state' onChange={addFn} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" name='image'  onChange={handleChange} required/>
      </Form.Group> 
      <div className='text-center'>
        <Button variant="primary" type='submit'>
          UPDATE
        </Button>
      </div>
    </Form>
  </div>
  )
}

export default EditContacts
