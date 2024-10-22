import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';


function Footer() {
  return (
    
      <div className='b1'>
     <br /> <br />
      <Container className='cc'>
      <Row>
        <Col sm={3}>
        <h5> Company Delalis And Roles</h5>
        
          
            <img src="f.png" alt="hjkhk " className='img22' id='b2'/>
           <img src="x.png" alt="xlinkx"  className='img22' id='b3' />
           <img src="li.png" alt="linkden"   className='img22' id='b4'/>
            <img src="you.png" alt="youtobe"  className='img22' id='b5'/> 
           <img src="insta.png" alt="insta"  className='img22' id='b6'/> 
        
        </Col>
        <Col sm={3}>
         <h3>ROLES</h3>
         <ul>
          <li>Digital Marketing Agency</li>
          <li>SEO Agency</li>
          <li>Web Design Agency</li>
          <li>Industries We Serve</li>
          <li> Softwere Developer</li>
         </ul>
        </Col>

        <Col sm={3}>
         <h3> COMPANY</h3>
         <ul>
         <li> About Us</li>
         <li> Careers</li>
         <li> Community Impact</li>
         <li>Contact Us</li>
         <li> Locations</li>
         <li>Phishing Scam Alert</li>
         <li> Tools</li>
            </ul>
        </Col>


        <Col sm={3}>

        <h3> EXALORE</h3>
          <ul>
         <li> Color Picker</li>
         <li> Emoji Cheat Sheet</li>
         <li>Conversion Rate Calculator</li>
         <li>SEO in Digital Marketing</li>
         <li>SEO vs. SEM</li>
         <li>Return on Ad Spend</li>
         <li> ROAS Calculator</li>
          </ul>
        </Col>
      </Row>
    </Container>
      </div>
  
  )
}

export default Footer;
