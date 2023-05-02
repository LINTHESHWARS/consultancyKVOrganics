import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ContactAddressArea.css'
import phone from '../images/phone.jpg'
import location from '../images/location.jpg'
import message from '../images/message.jpg'

const ContactAddressArea = () => {
  return (
    <div className='infoCard'>
    <Card style={{width: '30rem' ,border:"1px solid rgb(49,54,61",backgroundColor:"#fff",color:"black"}}>
      <Card.Img variant="top" src={message} style={{height:"15rem"}}/>
      <Card.Body>
        <Card.Title>Email Address</Card.Title>
        <Card.Text >
          manikandanvpm.er@gmail.com
        </Card.Text>
        <Button variant="primary">Send Email</Button>
      </Card.Body>
    </Card>

    <Card style={{width: '30rem' ,border:"1px solid rgb(49,54,61",backgroundColor:"#fff",color:"black"}}>
      <Card.Img variant="top" src={phone} style={{height:"15rem"}}/>
      <Card.Body>
        <Card.Title>Phone Number</Card.Title>
        <Card.Text>
          +0123-456789
        </Card.Text>
        <Card.Text>
        +987-6543210
        </Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' ,border:"1px solid rgb(49,54,61",backgroundColor:"#fff",color:"black",boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}>
      <Card.Img variant="top" src={location} style={{height:"15rem"}}/>
      <Card.Body>
        <Card.Title>Office Address</Card.Title>
        <Card.Text >
        KV Complex, Salem main road, Muthukalipatti, Rasipuram, Namakkal, 637 401</Card.Text>
        <Button variant="primary">Visit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactAddressArea