import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  "./Jobcard.css"
import { Link } from 'react-router-dom';
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
// import { Link } from 'react-router-dom';




function Jobcard() {
  return (
    <>
   
    <div>
  
      <h1 className='h22'>Expolore Job Opportunities</h1>
      <div>
      <Container>
      <Row>
        <Col sm={4}>
        <Card  className='ch'>
      < Card.Img variant="top" src="1.jpg"  />
      <Card.Body className='cbb'>
        <h3 className='title'>Software Company</h3>
        <span>
          Some quick example text to build </span>
        <li className='icon'>
        <FaTwitterSquare  className='tw'/> <AiFillLinkedin className='ln'/> <FaFacebookSquare  className='fb'/>
        </li>
       

        <button  className='jb'> <Link to="/Jobdetails">Softwere Devloper</Link> </button>
      </Card.Body>
     
    </Card>
        </Col>


        <Col sm={4} >
        <Card className='ch'>
      <Card.Img variant="top" src="5.jpg"  />
      <Card.Body className='cbb'>
        <h3>Civil Job</h3>
        <span>
          Some quick example text to build
        </span>
        <li className='icon'>
        <FaTwitterSquare  className='tw'/> <AiFillLinkedin className='ln'/> <FaFacebookSquare  className='fb'/>
        </li>
        <button  className='jb'> <Link to="/Jobdetails">Civil  Diginer</Link> </button>
      </Card.Body>
    </Card>
        </Col>


        <Col sm={4}>
        <Card className='ch'>
      <Card.Img variant="top" src="4.jpg" />
      <Card.Body className='cbb'>
        <h3>Card Title</h3>
        <span>
          Some quick example text to 
        </span>
        <li className='icon'>
        <FaTwitterSquare  className='tw'/> <AiFillLinkedin className='ln'/> <FaFacebookSquare  className='fb'/>
        </li>
        <button  className='jb'> <Link to="/Jobdetails">Civil  Diginer</Link> </button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
      </div>
       <marquee behavior="" direction="Left"> <h1 className='h22'>Best Of The Luck Expolore Job Opportunities</h1></marquee>

       <div>
      <Container>
      <Row>
        <Col sm={4}>
        <Card className='ch'>
      <Card.Img variant="top" src="1.webp" />
      <Card.Body className='cbb'>
        <h3>Card Title</h3>
        <span>
          Some quick example text to
        </span>
        <li className='icon'>
        <FaTwitterSquare  className='tw'/> <AiFillLinkedin className='ln'/> <FaFacebookSquare  className='fb'/>
        </li>
        <button  className='jb'> <Link to="/Jobdetails">Civil  Diginer</Link> </button>
      </Card.Body>
    </Card>
        </Col>


        <Col sm={4} >
        <Card className='ch'>
      <Card.Img variant="top" src="3.jpeg"  />
      <Card.Body className='cbb'>
        <h3>Card Title</h3>
        <span>
          Some quick example text to 
         </span>
         <li className='icon'>
        <FaTwitterSquare  className='tw'/> <AiFillLinkedin className='ln'/> <FaFacebookSquare  className='fb'/>
        </li>
        <button  className='jb'> <Link to="/Jobdetails">Civil  Diginer</Link> </button>
      </Card.Body>
    </Card>
        </Col>


        <Col sm={4}>
        <Card className='ch'>
      <Card.Img variant="top" src="2.jpeg" />
      <Card.Body className='cbb'>
        <h3>Card Title</h3>
        <span>
          Some quick example text to build 
        </span>
        <li className='icon'>
        <FaTwitterSquare  className='tw'/> <AiFillLinkedin className='ln'/> <FaFacebookSquare  className='fb'/>
        </li>
        <button  className='jb'> <Link to="/Jobdetails">Civil  Diginer</Link> </button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
      </div>
       
    </div>

</>
  )
}

export default Jobcard
