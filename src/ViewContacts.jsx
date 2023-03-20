import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { userContext } from './App';
import "./view.css"

function ViewContacts() {

  const single = useContext(userContext);
  const { id } = useParams();

  const singleContact = single.contacts[id];  
  const nav = useNavigate();
  
  console.log(singleContact);
  return (
    <div>
      <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={singleContact.image} alt='...' fluid  style={{margin:"65px 5px"}}/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle style={{padding:"15px"}}><b>{singleContact.firstName} {singleContact.lastName}</b></MDBCardTitle>
            <MDBCardText>
            <h6><b>Address: </b>{singleContact.address.address || singleContact.address}</h6>
            <h6><b>City:</b> {singleContact.address.city || singleContact.city}</h6>
            <h6><b>State:</b>  {singleContact.address.state || singleContact.state}</h6>
            <h6><b>Phone:</b>  {singleContact.phone}</h6>
            <h6><b>Email:</b>  {singleContact.email}</h6>
            </MDBCardText>
            <MDBCardText>
              <Link to={'/'}>  <MDBBtn>Go Back</MDBBtn> </Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  







    {/* <Card>
    <Card.Img variant="top" className='card-img' src={singleContact.image}/>
    <Card.Body> */}
      {/* <Card.Title className='text-center'>{singleContact.firstName}</Card.Title> */}
      {/* <Card.Text>
        <Row style={{margin:"5px 50px"}}>
          <Col md={6} style={{padding:"10px"}}>
            <h6>NAME </h6>
            <h6>ADDRESS </h6>
            <h6>CITY </h6>
            <h6>STATE </h6>
            <h6>PHONE NO </h6>
            <h6>EMAIL ID </h6>
          </Col>
          <Col md={6} className='card-data'>
            <h6>{singleContact.firstName} {singleContact.lastName}</h6>
            <h6>{singleContact.address.address || singleContact.address}</h6>
            <h6>{singleContact.address.city || singleContact.city}</h6>
            <h6>{singleContact.address.state || singleContact.state}</h6>
            <h6>{singleContact.phone}</h6>
            <h6>{singleContact.email}</h6>
          </Col>
        </Row>
       
      </Card.Text>
      <div className='text-center'>
      <Button variant="dark" onClick={()=>nav('/')}>Back To Home</Button>
      </div>
    </Card.Body>
  </Card> */}
  </div>
  )
}

export default ViewContacts