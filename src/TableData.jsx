import React, { useContext} from 'react'
import {Button, Col, Row, Table} from "react-bootstrap"
import { userContext } from './App'
import { Link} from 'react-router-dom'
import "./App.css"
import { MDBIcon } from 'mdb-react-ui-kit'

function TableData() {
  const {contacts} = useContext(userContext);

  return (
    <div className='container p-4'>
      <div >
        <Row>
          <Col className='text-end p-4'>
            <Link to={'/add'}>
              <Button>Add Contacts</Button>
            </Link>
          </Col>
        </Row>
      </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact,index)=>{
          return(
            <tr>
              <td>{index+1}</td>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td><img  src={contact.image} alt='img' style={{width:"50px",height:"50px"}}/></td>
              <td>
                <div>
                  <Link to={`/view/${index}`}>
                    <Button className="action-btn">
                    <MDBIcon far icon="eye" style={{color:"black"}}/></Button>
                  </Link>

                  <Link to={`/edit/${index}`}>
                    <Button style={{marginRight:"6px",marginLeft:"6px"}}>
                  <MDBIcon far icon="edit"/></Button>
                    </Link>

                  <Link to={`/delete/${index}`}>
                    <Button><MDBIcon far icon="trash-alt"/></Button>
                  </Link>

                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default TableData
